# Personality, working lights and furniture movement

## Scope
This is the first three-part personality pack the user approved: guest reactions, working lights/window views, and small furniture movements. All game assets and metadata changes are inside art/. No edits to index.html. Existing room/background/character base files, manifest entries, dimensions and catalog values are preserved. The treehouse branch correction remains intact.

## Guest reactions: 416 new SVGs
Four short eight-frame reactions for all 12 guests and the inspector,56 x 96,feet anchor {28,96}:
- chars/<identity>_react_admire_1..8: look toward a furnishing, hands to chest and a small clap, then relax.4 fps, one shot.
- chars/<identity>_react_warm_hands_1..8: hands extended toward a lit hearth, small palm movements and a contented expression.3 fps, loop while warming.
- chars/<identity>_react_photo_1..8: lift a camera, hold the viewfinder, tiny lens glint and lower it.5 fps, one shot. No full-screen flash.
- chars/<identity>_react_window_peek_1..8: lean, shade the eyes, point toward the view and relax.3 fps, one shot.
Identity heads/hair, skin tones and clothing palettes are retained. Reaction poses leave travel luggage aside while hands are occupied. reactions.js supplies STARLIT_REACTIONS with anchors, frame keys, fps, play mode and target tags. Existing item metadata gains guestReactions eligibility lists for beds, windows and the fireplace. These lists do not force a reaction every visit.

## Furniture motion: 40 frame SVGs
All frames replace the static item image, rather than overlaying a second copy. Existing source sizes remain unchanged.
- hammock_bed_sway_1..8:128 x 72,3 fps; fixed posts, cloth/pillow/blanket moving gently. Eight sleepOffsets let the sleeping head move with the mattress.
- ceiling_fan_spin_1..8:72 x 32,8 fps; fixed mount and hub, three rotating blades in shallow perspective.
- fireplace_burn_1..8:88 x 88,4 fps; stable brick/mantel with gently varying flame shapes.
- NEW rocking_chair.svg and rocking_chair_rock_1..8:72 x 80,3 fps; curved runners with fixed floor contact. Floor/seating,360 coins,6 decor,level 4.
- NEW linen_curtains.svg and linen_curtains_flutter_1..8:96 x 104,3 fps; fixed wall rod and gently moving folds/hem. Wall/wall,180 coins,4 decor,level 2.
decor_animations.js supplies STARLIT_DECOR_ANIMATIONS. Activation hints are occupied_or_settling, enabled, lit or breeze. Existing items gain animation frame references; only the two new furniture pieces add purchase entries. No existing costs, levels, climate fields, bed layouts or placement properties were changed.

## Working lights: 9 profiles
lamp, gold_lamp, pink_lamp, halloween_pumpkin_lamp, chandelier, gold_chandelier, brass_cabin_lantern, industrial_pendant and fireplace each have an exact-size decor/<id>_off.svg plus eight transparent effects/light_<id>_1..8.svg halos at4 fps. This adds 81 SVGs. Halos have a soft radial falloff, approximately 17% centre alpha with only 0.4 percentage-point breathing variation. They do not flash. Original on/base filenames remain intact. Large halo canvases deliberately extend beyond their item and must be clipped to the room.
lighting.js supplies STARLIT_LIGHTING: source dimensions, local emitter point, halo dimensions/anchor, on/off keys, halo frames, activation state, optional 18% dusk/night room tint and 1200 ms transition duration. Auto times are evening/night, with actual item switch/lit state taking precedence. Fireplace can still be lit in daytime. The profiles for built-in lamp/chandelier work by item ID without overriding their original catalog prices.

## Window views: 8 new SVGs
Seven windows gain _night variants with dark blue glass, small moon/stars and preserved frames. window_city_view keeps its existing night key and gains _day. Existing source dimensions remain unchanged. Every window item gains dayNight references; lighting.js also lists all eight day/night pairs. These are appearance variants of the same purchased item, not extra purchasable windows.

## Preview
preview.html loads the three new metadata files and adds:
- Four reaction scenes,13-identity selector and replay button. One-shot reactions pause before repeating in the preview; warm_hands cycles continuously.
- Day/Dusk/Night lighting room with nine selectable lights, an animated rocker and cross-fading window view. Halo, on/off sprite and room tint fade gradually.
- Five standalone furniture-motion players with individual frame galleries.
Existing room studios, animation clocks, pause/scale controls and asset galleries remain. See CODE_NOTES.md for the game-code handoff. This pack creates no guest scheduler, temperature effects, automatic rewards or gameplay audio.

---
Previous batches below remain applicable.

## Latest branch refinement
The empty pale room boxes are unchanged. Supporting wood now uses uneven, tapered cubic growth curves, unequal forks, fused branch joints, bark grooves and small knots. Outline strokes are drawn beneath a shared fill, removing internal seams that made the old supports look like bent pipes. All keys, dimensions, room bounds, guest/staff slots and the tall version swing are retained. Combined SVGs were synced to the branch/cabin layers. No game-code edits.

# Latest treehouse silhouette correction
The supplied reference clarified the intended shape: a spare pale-mint room frame, thin crooked supporting wood and sparse irregular edge vines. The earlier heavy trunks, dark furnished cabins and evenly repeated leaf border were replaced.
All three sizes and all nine combined/component SVG keys are preserved. The box remains the top168px, perfectly flat at y0, with floor at156 and transparent air below. Interior furniture, lights and decorative fixtures were removed from the treehouse backgrounds. Furniture remains placeable from the existing catalog. Small bevels and a light floor band provide depth without filling the room with baked props.
The 1x2 has a slim straight/twisting stem with small forks. The 2x2 has a thin crooked central trunk, tapered forks and small roots. The 2x3 has a longer narrow trunk, knot and small rope swing. All branch/cabin layers match the combined assets. These are original vectors interpreting the reference's broad silhouette and proportions; no screenshot tracing, logos, prices or UI artwork was used.
Because the interiors are now empty, reading visitors use read_stand rather than sitting on invisible chairs. Capacities stay2/4/6, floor anchors remain156, guide positions stay inside, and old seat foreground masks are removed. Updated room_layouts.js adds interiorMode=unfurnished; the actual wall/floor/frame bounds do not change.

---
Earlier batch notes below remain applicable except for the superseded treehouse interior/silhouette.

# Alive hotel art batch

## Scope and preservation
All changes are inside art/. No edits to index.html. Every original asset key, file name and canvas size is retained. This batch adds 675 SVG keys, for 2004 registered SVGs. Every SVG is a self-contained flat vector with #2b2340 outlines, no text elements, embedded images, external links, scripts or SVG animation. Sleeping Z marks are paths.

## Eight-frame guest activities
All twelve guests and the inspector now have eight distinct frames for thirteen actions: 169 loops / 1352 SVG frames. Source identity heads, hairstyles, skin tones and outfit palettes are retained. Actions use changing arm/leg poses, weight shifts, head reactions and smaller follow-through rather than moving an unchanged standing sprite.
- Swim: alternating front-crawl recovery/pull, horizontal body, low kick, head bob and small surface splash; no standing legs or shoes.
- Run: low jogging stride on the treadmill, arms pumping through an elbow arc, small body compression; feet remain at the belt.
- Lift: two-handed barbell curl with planted feet and a brief breathing hold.
- Stretch: reach up, side bend, toe touch, unfold and return.
- Watch: seated settling, smile/laugh, reach for popcorn, lean and gasp.
- Read/read_stand: a visible page turn, nod, hand to temple/glasses, look up and smile.
- Eat: raise chopsticks/noodles, blow/slurp, chew and lower.
- Drink/drink_stand: lift, sip with eyes closing, lower cup, glance and sigh.
- Play: alternating button presses, lean and raised victory fist.
- NEW wash: load/fold a towel, reach for the washer button and return to folding.
- NEW relax: reclining arms behind the head, gentle toe movement and breathing, eyes closed with a short dozing Z trail.

| Activity | Canvas | Frames | FPS | Anchor x,y |
|---|---|---:|---:|---|
| swim | 96 x 56 | 8 | 8 | 48, 44 |
| run | 56 x 96 | 8 | 10 | 28, 96 |
| lift | 56 x 96 | 8 | 4 | 28, 96 |
| eat | 56 x 112 | 8 | 3 | 28, 88 |
| drink | 56 x 112 | 8 | 2 | 28, 88 |
| watch | 56 x 112 | 8 | 2 | 28, 88 |
| play | 56 x 96 | 8 | 6 | 28, 96 |
| read | 56 x 112 | 8 | 2 | 28, 88 |
| drink_stand | 56 x 96 | 8 | 2 | 28, 96 |
| read_stand | 56 x 96 | 8 | 2 | 28, 96 |
| stretch | 56 x 96 | 8 | 2 | 28, 96 |
| wash | 56 x 96 | 8 | 3 | 28, 96 |
| relax | 112 x 80 | 8 | 1.5 | 56, 68 |

Existing canvases/anchors remain unchanged. New wash is 56 x 96 with feet anchor {28,96}; relax is 112 x 80 with reclining seat anchor {56,68}. Seated actions retain 56 x 112 with seat anchor {28,88}. Cups/popcorn remain separate occupied-slot props, with eight activityOffsets following their guest's hands; no duplicate fixed cup/carton is baked into those guest frames. Food props retain three steam/settling frames at 4 fps.

## Placeable climate equipment and windows
Removed baked AC units and actual window assemblies from classic rooms, theme variants and treehouse cabin layers, exposing the original matching wall colour/pattern. Loft gallery rail, gym mirrors and cinema screens remain: these are not windows. Orphaned moon/landscape details inside former window panes were removed too.
All climate/window items allow rooms [guest,amenity,lobby]. Existing split_air_conditioner keeps its 84 x 36 size and receives climate=cool.
New climate items: compact_aircon 56 x 28 (cool, wall), retro_window_aircon 48 x 40 (cool, wall), ceiling_fan 72 x 32 (cool, ceiling/lighting), radiator 56 x 36 (warm, floor/wall category), fireplace 88 x 88 (warm, floor/lighting), smart_thermostat 20 x 24 (both, wall).
Eight new wall/category-wall windows: window_square 56 x 56, window_tall 40 x 96, window_wide 96 x 48, window_arched 56 x 80, window_round 48 x 48, window_bay 112 x 72, window_city_view 88 x 64 (night skyline), window_shuttered 56 x 64. Prices 120-600, levels 1-10, decor 3-7. Existing item values/categories/placement fields are retained.

## Treehouse replacement: flat room box on a trunk
This replaces the earlier roof-deck/canopy design. All three have a perfectly flat, full-width top at y0, an enclosed 168 px room box, vine/small-leaf trim inside all four edges, and transparent outdoor space below the box. Nothing extends above the top edge.
- treehouse_2x2: 320 x 336; twisted middle trunk, two short branches supporting corners, spread roots.
- treehouse_2x3: 320 x 504; same top box, taller trunk, knot and side branch with a rope swing.
- NEW treehouse_1x2: 160 x 336; slim box and straight central trunk.
Rich timber walls, lantern, bookshelf, rug, reading seats and fairy lights remain inside. No AC or windows. Each has matching building/<id>_branch.svg and _cabin.svg layers. Main floor is y156, with a 12 px band; frameBounds covers x0,y0,full width,height 168. wallBounds is the wall portion (height 156), floorBounds is the bottom band, and supportBounds is the flat top strip (height 8). Guest/guide anchors stay inside the box. Capacities are 4/6/2.

## Cinema and tea seating
All five cinema styles have separate rear/front draw depths. Front-row guest z20 is above every rear chair crop (z8), and only that front guest's own lap/arm pieces (z24) overlap them. Each slot has one real chair and forSlot mask identifiers. Usher remains in the right aisle. No entire rear-seat rectangle is restored over a front-row head.
Tea seat-wide masks were removed, retaining only narrow table lips where needed. Guests remain visible from head to knees. Classic bookshelf now extends to a proper base with floor-contact feet; themed elevated bookcases have visible support feet/brackets.

## Laundry: 2x1 amenity
rooms/laundry.svg, gold_laundry.svg, pink_laundry.svg: 320 x 168 tiled laundromats, three front-loading washers with glass doors, dryer, folding table/towels, detergent shelf, drying rack and bulbs. laundry_fx_1..3 show rotating suds; matching Gold/Pink effect keys use the same geometry. Three wash slots (x34/102/170,y157,scale 0.8) and staff_laundry (base plus _1..4, 56 x 96, teal smock, folding loop at 4 fps, scale 0.8).

## Chill: new 2x1 amenity
rooms/chill.svg, gold_chill.svg, pink_chill.svg: 320 x 168, three reclining chairs in terracotta/mustard/teal or theme colours, rug, plants, floor lamp, side table/drinks, record player and lava lamp. chill_fx_1..3 animate lava, record mark and leaf highlights; matching Gold/Pink effect keys are included. Three relax slots at x44/130/216,y142,scale 0.65, with small own-chair armrest crops. staff_chill (base plus _1..4,56 x96) carries a tray of drinks, at 4 fps and scale 0.8.

## Preview / handoff
preview.html has all thirteen eight-frame players, identity selection, hand-following props, thirteen occupied-room studios, all three box treehouses, cinema/lounge, three-theme laundry/chill and their FX, both staff loops and a fifteen-item climate/window gallery. Existing controls and galleries remain. CODE_NOTES.md describes frame selection, prop following, layer order and required game/catalog changes. Art metadata alone does not change gameplay rules.

## Validation
All 2004 registered SVGs passed XML, exact width/height/viewBox, self-contained markup, file size, manifest-path and preview-dimension checks. All 675 new keys are registered; every original key/source size/item value was retained. The largest SVG is 9508 bytes. All 169 activity loops have eight distinct frames. Native SVG renders checked the 1352 activity frames for side clipping, and the twelve wide-hair turns were corrected. Both old-size and the new slim treehouse layers match their combined art exactly, with opaque full-width top rows and transparent lower corners. Known baked AC/window assemblies are absent from room/cabin files. Preview initialized all 2004 assets with zero failures, shows all thirteen eight-frame players, and passed 234 guest/theme/occupancy combinations plus all thirteen identity-switch checks. Browser gameplay was not verified.

Removed the baked hanging lamps (cord, shade, rim highlight and faint glow) from rooms/nook.svg and rooms/loft.svg; all other elements, sizes and keys are unchanged. Classic checked; no separate Gold/Pink Nook or Loft SVGs or manifest keys exist. Lighting remains supplied by placeable items.

## Validation for this personality pack
All 2551 SVGs passed XML, exact dimensions/viewBox, self-contained markup, manifest-path and file-size checks. All original 2004 keys, source dimensions and catalog values were retained. Largest SVG: 9508 bytes. New content totals 547 SVG keys, 416 reaction frames, 40 furniture-motion frames, 72 halos, 9 off variants, 8 window views and 2 new item base sprites. All 416 reaction sprites were rendered and checked for side clipping, with no clipping found. Preview initialization checked 2551 assets with zero failures; 351 guest/light/time combinations passed, with 4 reaction scenes, 5 motion players and 9 light selections. Existing animation/pause/scale controls remain intact. Browser gameplay was not verified.
