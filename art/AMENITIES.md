# Guests actually using amenities

## Corrected visual problem
The former drawAmenGuest() called drawBean(), which chooses a standing or walking pose. It adds a little bob for pool and gym visitors. That gives swimmers visible standing bodies and shoes, diners no eating gesture, and visitors no relationship to chairs or controls. These new files are activity-specific replacements. The live game now loads these frames and draws activity poses with room-local anchors and foreground furniture crops.

## Activity art
Every guest identity (guest_1 through guest_12 and inspector) has the following loops. Keys are chars/<character>_<activity>_<frame>. All frames are original self-contained SVGs, with transparent backgrounds, no scripts/embedded images/external links, and less than 60 KB per file.

| Activity | Canvas | Frames | FPS | Anchor in file pixels |
|---|---|---:|---:|---|
| swim | 96 x 56 | 8 | 8 | x48, y44, waterline |
| run | 56 x 96 | 4 | 8 | x28, y96, belt/floor |
| lift | 56 x 96 | 4 | 3 | x28, y96, floor |
| eat | 56 x 112 | 4 | 3 | x28, y88, seat |
| drink | 56 x 112 | 4 | 2 | x28, y88, seat |
| watch | 56 x 112 | 4 | 2 | x28, y88, seat |
| play | 56 x 96 | 4 | 4 | x28, y96, floor |
| read | 56 x 112 | 4 | 2 | x28, y88, seat |
| drink_stand | 56 x 96 | 4 | 2 | x28, y96, floor |
| read_stand | 56 x 96 | 4 | 2 | x28, y96, floor |

There are 572 new frames across thirteen identities. The exact original heads, hairstyles and skin tones are retained. Bags, cameras and other carried travel props are omitted during activities. Top hats, caps and headphones are removed for swimming/exercise. The hooded guest keeps covered swimwear. Swimming uses a horizontal body and alternating crawl strokes, with the lower body clipped below a constant waterline and only small ripple strokes visible. Seated poses have bent legs, not standing legs pushed below a table. Tea cups, spoons, weights, popcorn and books move with their hands.

## Room placements and foreground overlap
amenity_animations.js defines window.STARLIT_AMENITY_ANIMATIONS. Each activity has an anchor, its size, rate and all character frame keys. Each room has one slot per current room capacity. Coordinates and scales refer to the room SVG's full file size, before the game's normal half-size display. Slot phase offsets prevent synchronized visitors.

- pool: three swimmers placed inside the water, not on the deck; love/halloween positions avoid their decorative float rings.
- fit: one runner on the treadmill belt, one visitor curling dumbbells near the rack.
- noodle: three eaters at the stools; restore the counter foreground over their bodies while leaving heads and lower legs visible.
- lounge: seated sipping where the artwork has seating, standing sipping for extra visitors; style-specific placements cover Love, Halloween, Winter, Gold and Pink interiors.
- cinema: four back-row viewers and one front-row viewer. Foreground crop z values put front-row seat backs between rows and cushions in front of seated hips.
- games: three guests at the original cabinets, reaching for controls. Restore the control-panel foreground over the relevant hands/body edges.
- treehouse_2x2 and treehouse_2x3: reading on the indoor bench/chair and standing reading inside the cabin. All actors use the cabin floor, never the bottom of the exposed tree canvas.

Foreground records are rectangles to copy from the selected room's own loaded image, not new opaque rectangles. This preserves theme colours. Crop with the supplied source x/y/width/height and draw at that same room-local rectangle after actors at a lower z. Do not redraw an entire room on top of the guests.

## Live game renderer
The user explicitly authorized an exception to the art-only restriction for the amenity renderer. index.html now implements this integration:
1. Load art/amenity_animations.js after manifest.js.
2. Replace the inAmen standing-guest draw path with activity lookup by room type and slot. Character is inspector when g.inspector, otherwise guest_<g.skin>.
3. Use slot/activity metadata; do not feed the new canvases through drawBean(), which assumes 56 x 96. Each activity supplies a different anchor or posture.
4. Compute frame = floor((animationTime + slot.phase) * fps) % frames. Pause with game time. Use phase offsets so visitors are not all moving together.
5. Convert room-local SVG coordinates to the displayed room: sx=roomWidth/layout.width, sy=roomHeight/layout.height. Draw left=slot.x-anchor.x*slot.scale, top=slot.y-anchor.y*slot.scale, width=activity.width*slot.scale, height=activity.height*slot.scale; then apply sx/sy and room origin. Pool motion is a small additional x/y offset from swimMotion.
6. Gather actors and foreground crops for a room and draw them by z, using the currently selected style image for crops. For lounge/pool use styleOverrides only when that actual themed sprite exists. Keep faces/hands visible while counters, seat fronts and controls cover the correct parts of bodies.
7. Leave queue, arrival and departure guests using their existing walk/idle frames. Fall back to a base pose if a complete activity set is absent.
8. For treehouse rooms, keep the separate open-air wall/frame fix from TREEHOUSES.md.

## Preview
The Guests using amenities section in preview.html shows all eight amenity types at once, with proper pose sizes, water/seat anchors, phase offsets and foreground crop ordering. Change the Guest selector to check all thirteen identities, or Room style to inspect theme layouts. Global pause and scale controls apply. The gallery also lists all individual frames.

## Helper cap correction
chars/helper.svg retains its 144 x 208 dimensions and welcoming pose. The teal star cap now has a wider fitted lower crown and gold band spanning the whole head. The upper scalp and hair contours were reshaped under it so no side of the head protrudes beside the cap.

## Validation
Game scripts compile. Renderer checks passed for 624 room/identity/style combinations, duplicate seats, dragged rooms, missing frames and frame playback. Actual draw calls were composited for visual inspection. Browser gameplay was not verified.
