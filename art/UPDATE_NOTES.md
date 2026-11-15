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
