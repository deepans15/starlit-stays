# Sprite sheet integration - 2026-11-17

## Delivered and verified

301 lossless RGBA PNG sheets in sheets/, indexed by window.STARLIT_SHEETS in sheets.js. These replace 2,287 numbered animation-frame requests with 301 sheet requests. Total PNG size: 9,346,405 bytes (8.913 MiB). Maximum width: 1,920 pixels, strictly below 2,048. Maximum height: 3,240 pixels; the width limit requires the 960x540 twelve-frame effects to use 2 columns and 6 rows. A renderer with a texture-height limit below 3,240 must handle those sheets separately; do not assume every sheet fits a 2048x2048 texture.

All 2,551 existing manifest entries and SVG files remain unchanged. All existing animation/placement/timing metadata and preview.html remain unchanged. index.html was not edited. This is an asset packaging delivery: the current game continues using SVGs until its loader is wired to sheets.js.

There are also 264 static manifest images. If every asset is loaded, sheets plus statics require 565 image requests, instead of 2,551 (77.9% fewer). The approximately 300 target is met for animation sheets (301), not for all images combined. Preserving the requested separate statics prevents reaching 300 total image requests in this batch. Lazy-loading sheets can reduce initial requests further. Files on disk are intentionally retained for compatibility.

Coverage: all character activity, walk, reaction, working staff, handyman fix, clerk blink, cleaner sweep and animated prop sequences; all five decor motion sequences; light halos; weather layers; animated background/room FX; emergency overlays; broken overlays; crate opening. Numbered guest identities (chars/guest_1..12) and rating faces (ui/face_1..5) are separate static designs, not animations, and remain SVGs.

## Index and coordinate contract

Load art/sheets.js before the new image loader. Paths in `file` are relative to art/. Sheet keys omit the final frame number and extension; original keys are preserved verbatim in `frameKeys`.

Example, with the actual existing source dimensions:

```js
"chars/guest_1_run": {
  "file": "sheets/chars/guest_1_run.png",
  "frames": 8,
  "cellW": 56,
  "cellH": 96,
  "scale": 0.5,
  "pixelsPerGamePixel": 2,
  "anchor": [28, 96],
  "cols": 8,
  "rows": 1,
  "frameKeys": ["chars/guest_1_run_1", "chars/guest_1_run_2", "..."]
}
```

The shortened frameKeys above is illustrative; sheets.js contains every real key, never an ellipsis. Cell sizes are sheet pixels. The art brief says the game displays SVGs at half their file size: source SVG pixels already provide the requested 2x display resolution. Rasterizing at native SVG dimensions therefore preserves 2x game resolution, rather than doubling already doubled art.

To follow the requested scale:0.5 example, `scale` means GAME PIXELS PER SHEET PIXEL. Its inverse, `pixelsPerGamePixel`, explicitly records SHEET PIXELS PER GAME PIXEL = 2. Do not use these two meanings interchangeably. A 56x96 cell displays at 28x48 game pixels before any existing slot, room, camera or device scaling. Canvas/device pixel ratio remains the renderer's responsibility. If an existing draw call already supplies destination width/height, keep those exact dimensions; do not apply scale again.

`anchor` is in cell-local sheet pixels, copied from existing activity/reaction/decor/light metadata. Standing/walking/staff feet are [28,96]; seated actions [28,88]; swim [48,44]; relax [56,68]. Prop sprites use their bottom-centre anchor. Full-scene and UI overlays use [0,0] because their existing placement is top-left. UI crate opening also uses top-left placement. The anchor is an origin convention, not new artwork or an offset baked into the cell. Do not subtract it twice if existing code already computes a top-left destination.

Every cell has its original complete canvas, including transparent margins. There is no trimming, rotation, resampling, padding, extra glow, recolouring or anchor recentering. Frames run left to right, then top to bottom. `cols` and `rows` are explicit even for one-row sheets. Any unused end cells are fully transparent. Use integer source rectangles and the original destination transform, not the entire image's dimensions or a stretched CSS background. No gutters are inserted; texture/UV code must constrain sampling to the selected cell and avoid mipmaps that blend neighbouring frames.

## Map an old frame key to a sheet

Build/cache this lookup once. It leaves static names such as ui/face_3 alone and uses the final numbered suffix, so character numbers and activity names containing underscores remain intact.

```js
function resolveSheetFrame(oldKey) {
  const match = /^(.*)_(\d+)$/.exec(oldKey);
  if (!match) return null;
  const sheet = window.STARLIT_SHEETS[match[1]];
  const frameIndex = Number(match[2]) - 1; // zero-based
  if (!sheet || frameIndex < 0 || frameIndex >= sheet.frames ||
      sheet.frameKeys[frameIndex] !== oldKey) return null;
  return {
    sheetKey: match[1], sheet, frameIndex,
    sx: (frameIndex % sheet.cols) * sheet.cellW,
    sy: Math.floor(frameIndex / sheet.cols) * sheet.cellH,
    sw: sheet.cellW, sh: sheet.cellH
  };
}
```

`chars/guest_1_run_3` maps to sheets/chars/guest_1_run.png, frameIndex 2, source rectangle [112,0,56,96], anchor [28,96]. A wrapped example: weather/rain_front_3 maps to frameIndex 2, rectangle [0,540,960,540] on a two-column sheet.

```js
const cell = resolveSheetFrame(oldKey);
if (cell) {
  // Cache/decode one Image per cell.sheet.file, not one per old frame key.
  const image = sheetImageCache.get(cell.sheet.file);
  // dx/dy/dw/dh are the EXACT destination rectangle of the existing SVG draw.
  ctx.drawImage(image, cell.sx, cell.sy, cell.sw, cell.sh, dx, dy, dw, dh);
} else {
  // Existing manifest SVG fallback, including all static assets.
}
```

If drawing from an anchor position instead of a precomputed rectangle, let effectiveScale be the old SVG file-pixel-to-destination-pixel transform (including room/slot/camera scaling), then dx=x-anchor[0]*effectiveScale, dy=y-anchor[1]*effectiveScale, dw=cellW*effectiveScale, dh=cellH*effectiveScale.

Do not eagerly preload all STARLIT_ART entries after adding sheets: that would still fetch the original frames. Resolve animation keys through STARLIT_SHEETS first, retain the old manifest as fallback, and request sheets by the same active identity/activity/scene policy as before. PNG sheets are intentionally not added to the old SVG manifest, so the current loader does not accidentally load both representations.

## Timing, layers and validation

Frame packing does not define or alter playback. Continue selecting old frame keys using amenity_animations.js, reactions.js, decor_animations.js, lighting.js, backgrounds.js, weather.js and existing UI/staff/walk logic. Preserve frame rate, phase, game pause/speed, blink holds, one-shot endings and looping behaviour. Numbered blink frames do not replace the unnumbered open clerk base or its existing hold durations. Preserve existing foreground crops, props, z order, slot scales and light emitters.

Validation: parsed every source SVG as XML; found no unregistered SVGs; checked every sequence is contiguous starting at 1; checked equal frame dimensions and consistent anchors; rendered every SVG at its exact native dimensions; copied raw RGBA cells without blending; decoded every final PNG and verified every pixel, including alpha and unused sheet space, against the packed source renders. All 2,287 frames passed. Hash-checked 2,563 original SVG/JS/HTML files before and after packing; none changed. Evaluated sheets.js as JavaScript and checked its index count. Per-sheet dimensions, frame counts and byte sizes are in sheets/validation.json.

---

# Earlier integration notes (retained)

# Current handoff: personality, lights and furniture motion
Art-only implementation. index.html was not edited. Load art/reactions.js, art/decor_animations.js and art/lighting.js after manifest/items. These files reference only registered SVG keys. This section adds to earlier amenity/treehouse requirements; it does not replace their layouts or eight-frame actions.

## Occasional guest reactions
STARLIT_REACTIONS provides four eight-frame 56 x 96 standing poses for each identity, feet anchor {28,96}. Resolve by guest identity or inspector, preserve feet/world position and face the target (flip the whole sprite if needed). Admire/photo/window_peek are one-shot: select min(7,floor(elapsed*fps)), then blend/return to the guest's previous walk/idle/activity. warm_hands can loop for a short warming visit, only while the fireplace is lit. The preview repeats one-shot reactions after a pause solely for art review.
Use items.js guestReactions as eligibility, not guaranteed behaviour. Suggested scheduling: a rare reaction when entering a decorated room or passing an interesting object, with 30-60 seconds of per-guest cooldown and at most one new reaction per room at a time. These are tuning suggestions, not implemented mechanics. Never teleport swimmers/lifters/washers out of their station to play a standing reaction. Prefer a free, reachable floor spot near the target. For a treehouse photo, use a reachable visitor position rather than placing the guest in transparent trunk space. Target tags are bed,rare_decor,fireplace,window,treehouse.
Reactions intentionally omit travel luggage; do not append old drawBean arm/briefcase overlays on top of the camera. Keep a bag as a separate floor prop where supported, or hide it for the short interaction. No XP, rewards, review cards or tips are generated by this art pack. Existing guest state and reward logic stay under Claude's control.

## Furniture replacement frames
STARLIT_DECOR_ANIMATIONS lists five item-ID profiles. Draw exactly one base/frame image at the item's normal source dimensions and placement anchor; never draw a moving frame over an unchanged static copy. Seed phase by item instance to avoid synchronized hammocks/curtains. Trigger movement from activation: occupied_or_settling for hammock/rocker, enabled for fan, lit for fireplace, breeze for curtains. Unused furniture can hold its base pose; a vacated rocker/hammock may settle for a couple of cycles.
The hammock's sleepOffsets are in its source pixels. Apply the current frame's dx/dy/rotation to the sleeping head/blanket anchor so it rides the mattress; do not stretch an old full-bed sleep overlay across the curved hammock. Keep table/shelf-parent coordinates for small items. New items rocking_chair and linen_curtains have ordinary catalog zone/category fields; no custom dragging mechanic is required. The curtains are independent wall decor and can be layered around a placed window. Existing item values and inventory IDs remain intact.

## Light placement and switching
STARLIT_LIGHTING profiles are keyed by item ID. Some built-in lamps are not repeated in art/items.js, so look up profiles independently of optional item.light metadata. Off uses profile.off. On uses profile.on, or the active replacement frame for a lit animated fireplace. Never paint a base flame over fireplace_off.
Emitter position = item world top-left + profile.emitter * the SAME source-to-world item scale, applying any item flip/parent transform. Halo top-left = emitter world position - profile.haloAnchor * that scale. Draw halo at haloWidth/haloHeight times scale, behind guest/item silhouettes but above the night room tint. Clip it to the room interior; for open-air treehouses clip to the 168 px room box, never brighten the trunk or the neighbouring room. Do not scale a halo into the item's small footprint, or leave it fixed after the item moves.
The SVG halo already contains its own soft opacity. Multiply only by the light's on/fade amount; do not add an opaque yellow rectangle. Use the 1200 ms fade for switches/time changes. autoTimes evening/night is an optional auto mode; an explicit switch or lit state wins, including daytime fireplace heat. Room ambientTint is optional, applies only to the interior art, and must not dim HUD labels, menus or the whole sky. Photo glints remain tiny; no camera/full-screen strobe is supplied.

## Window day/night appearances
Each window item has dayNight keys, also listed in STARLIT_LIGHTING.windows. Use the current scene time field: morning/day -> day image; evening/night -> night image. Cross-fade at the exact same placement/size, retaining its purchased item ID, wall position and saved inventory. window_city_view's existing base remains night; its day key is new. These images show the sky OUTSIDE through glass, so their panes become blue at night while the room lamps supply warm indoor light. Do not restore any former baked-in room windows/lamps.

## Integration and performance
All new keys are registered, but the game must consume these metadata files for the effects to appear. Stream/cache reaction frames by active character/action and item effects by placed item, rather than eagerly blocking startup on all 2,551 SVGs. Pause/speed should use the shared game clock. Keep existing climate/category/room-eligibility fields; lighting does not itself change temperature or repair eligibility. No new audio is included. Invalidate caches for new metadata; all old base asset filenames/dimensions are retained.

---
Earlier integration notes follow where not superseded above.

## Latest branch refinement
The empty pale room boxes are unchanged. Supporting wood now uses uneven, tapered cubic growth curves, unequal forks, fused branch joints, bark grooves and small knots. Outline strokes are drawn beneath a shared fill, removing internal seams that made the old supports look like bent pipes. All keys, dimensions, room bounds, guest/staff slots and the tall version swing are retained. Combined SVGs were synced to the branch/cabin layers. No game-code edits.

# Latest treehouse correction - takes precedence over older treehouse notes
Only treehouse art/metadata were revised; index.html was not edited. All source dimensions, IDs and 168px box bounds remain unchanged. Treehouse backgrounds are now pale and unfurnished, with sparse vines and slender crooked support wood, matching the clarified silhouette direction.
Use the updated slots: read_stand at floor156 (not the old seated positions), no seat foreground crops, and the revised guide positions. Capacities remain2/4/6. Do not redraw the old baked seating or the old seat crops; furniture should be placed by the player. room_layouts.js interiorMode=unfurnished describes this choice; existing openAir/box bounds still apply. Keep trunk-space alpha and a flat top edge for stacking. Invalidate caches for all nine treehouse combined/branch/cabin SVGs.

---
Earlier notes below apply where not superseded above.

# Current art integration requirements: alive hotel
This file supersedes earlier conflicting frame counts, treehouse bounds and laundry dimensions. Art/ only was edited; index.html is untouched by this task.

## Activity frames and state
Read amenity_animations.js activities. Every listed action now has frames=8 and its own fps/canvas/anchor; do not hardcode the old four-frame loops. Keys are chars/<guest_1..12|inspector>_<action>_1..8. Frame = floor((gameTime + slot.phase + perGuestOffset) * activity.fps) % 8. Use game time so pause/speed behave consistently. Keep the active action until the guest actually leaves; avoid a standing-pose reset at the loop boundary. Load/cache frames by identity/activity rather than eagerly blocking startup on all 1352 activity frames; use another loaded frame from the same action if a frame is still loading.
New wash:56x96,anchor28,96. New relax:112x80,anchor56,68 (reclining seat, not feet). Existing seated:56x112,anchor28,88; standing:56x96,anchor28,96; swimming:96x56,anchor48,44. Use these values instead of drawBean's fixed 56x96 assumption. Preserve each image aspect ratio; apply slot scale and displayed-room/file-room ratios. Queue/walking/sleeping state choices remain game-code responsibilities; this batch expands the specified amenity actions, not the existing walk/sleep assets.

## Props follow the guest
For an occupied assigned visual slot only, draw slot.prop at its supplied anchor/x/y/scale/z. Prop image frames remain their own 3-frame,4fps steam/carton loops. If followActivity=true, select activityOffsets using the SAME current guest frame (including phase/perGuestOffset), then add dx/dy in room-file pixels; these offsets already include slot.scale. Apply rotate about the prop anchor. Cups/cartons must not remain fixed on the table while the guest raises a hand. Do not draw a prop twice or on an empty seat. preview.html demonstrates the new fields. Existing guest drink/watch sprites intentionally omit a duplicate cup/carton.

## One sorted draw list per room
Collect all guests, permanent staff, props and foreground crops, sort by z, and draw once. Never restore all furniture after EACH guest. Prefer crops' forSlot when assigning a guest to its own chair; forSlot references the room's visual slot index. Use crop pixels from the actual selected room style image.
Cinema: four rear guests z5, popcorn6, their small chair masks8; usher9; front guest20, popcorn21, ONLY that front chair's armrests/lap24. Front guest uses x120.5,y303; rear seats use the existing four chair centres,y239. There is no full rear-seat rectangle above front heads. All five style overrides carry the same corrected order. Tea seat-wide horizontal masks are gone; keep the small table lips and avoid reintroducing the old sofa/armchair blocks. Bookshelf supports are now in room art.

## Player-placeable windows and climate data
Baked AC/windows were removed from all affected backgrounds/themes and treehouse layers. Mirrors, cinema screens, paintings, vents and architectural rails are intentionally retained. Draw wall/ceiling/floor items above room art in their existing placement system. Source sizes and rooms=[guest,amenity,lobby] are in items.js. Copy the new climate field into runtime item definitions if the catalog loader currently discards unknown fields: cool for split/compact/retro AC and ceiling_fan; warm for radiator/fireplace; both for smart_thermostat. Ceiling fan is category lighting; other category/zone values are explicit. Climate art is metadata only: connect temperature effects, repair eligibility and any power/economy logic in Claude's game code; no such gameplay logic was changed here.
All eight windows are normal wall items with sky/glass drawn inside their own frame. They must drag with existing wall-placement constraints and remain after saving/loading. No fixed window should be redrawn from the old room data. Preserve players' custom wallpaper and furniture when using opaque guest-room backgrounds; paint room defaults first, then the selected wall treatment and placeable decor.

## Treehouse replacement: normal box above open-air trunk
The current three layouts replace the earlier roof-deck/canopy proposal. Every box begins at y0 and is168px high, with nothing above its flat, full-width top. FrameBounds={x:0,y:0,width:canvasWidth,height:168}; wallBounds height 156; floorBounds={x:0,y:156,width:canvasWidth,height:12}; guestBaseline 156; supportBounds is the full-width top8px strip. Read room_layouts.js rather than old hardcoded212/196 values.
Existing treehouse_2x2 stays320x336 with 4 guests; treehouse_2x3 stays320x504 with 6. NEW treehouse_1x2 is160x336 and needs a 1x2 amenity catalog entry with 2 reading slots and guide staff. Cost/unlock remain gameplay decisions. Branch/cabin layers share the original full-canvas origin/size: draw branch then cabin, or combined room. Outside the top 168 px box, skip generic wallpaper/floor/edge fills and keep alpha. Restrict furniture, tints, dirt and guest anchors to the box. Keep logical footprint/support rules compatible with a room built flush on the top edge. The taller trunk's rope swing is decorative; no extra guest slots.

## Laundry and chill room catalog changes
Laundry is now a 2x1 AMENITY,320x168,3 slots using wash, not a 1x1 service room. Update room definitions, amenity-selection logic, capacity display and any older saved 1x1 placements; migrate/relocate them without overlapping neighbouring rooms. Match the three washer centres at x34/102/170,y157,scale 0.8.
Chill is a new 2x1 amenity,320x168,3 relax slots at x44/130/216,y142,scale 0.65. Relax actors recline into the lazy chairs; do not treat their anchor as a standing baseline. Small own-chair masks are supplied. Costs, unlocks, guest preferences, payouts and use durations remain Claude's decisions.
Both rooms have Classic/Gold/Pink source art and matching _fx_1..3 keys at 4 fps. Effects have only suds, lava/record/leaf motion, not opaque room repaints. Each room has permanent staff_laundry or staff_chill (base fallback plus _1..4,4fps,56x96,scale 0.8). Draw staff even when no guests are present and do not count them as guests. Retain the existing game-drawn Temp Staff tag above their head.

## Cache and preservation
Invalidate caches for revised activity and room keys. All prior file names, manifest entries and source canvas dimensions are retained; new keys are registered. Existing item values and placement/category fields are preserved, with the split AC's new climate/room-eligibility metadata added. No game code, save files or git operations were changed by this art batch.
