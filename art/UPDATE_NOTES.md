# Gym, Temp Staff, maintenance and ratings art batch

## Scope and preservation
All changes are inside art/. No writes to index.html. Every existing manifest entry, SVG name and canvas size is retained. items.js and all 42 existing category/placement entries are preserved without changes. SVGs are self-contained vectors using rounded #2b2340 ink outlines, no text elements, embedded images, external links, scripts or SVG animation. No raster assets were created.

## Three-station gym
Redrawn rooms/fit.svg, gold_fit.svg, pink_fit.svg: 320 x 168. Empty treadmill at left, bench with spare barbell rack in the middle, stretching mat at right. Every room keeps the label zone clear. Gym room effects fit_fx_1..3 are aligned to the new treadmill belt, with matching 320 x 168 transparent canvases.
fit has exactly three slots in Classic, Gold and Pink metadata: run x45,y149; lift x153,y157; stretch x262,y155. All use scale 0.8 and feet anchor {28,96}. The belt and floor are in the room, not in guest sprites. A foreground crop restores the treadmill rail. The bench/rack stay behind the standing lifter, so the low barbell is not erased by a seat crop.
- run_1..4 for guest_1 through guest_12 and inspector: clearly jogging in place, soles kept on one low baseline with no head bob or vertical hopping. Four frames at 8 fps.
- lift_1..4 for all 13 identities: one horizontal barbell held with both hands, moving through a planted-foot curl. Four frames at 4 fps.
- Existing run/lift_5..8 filenames/keys remain and have matching repeated poses; metadata now plays the requested four-frame loops.
- New stretch_1..4 for all 13 identities: 56 x 96, calm reach-up, left bend, toe touch, right bend. Four frames at 2 fps; feet fixed at anchor {28,96}. Faces, skin tones and hair match each identity; hats remain removed for exercise.

## Readable Temp Staff
All existing 40 staff SVGs (eight identities, base plus _1..4) keep 56 x 96 canvases and four-frame 4 fps loops. STAFF badges and lettering were removed. Uniforms: red chef jacket, teal apron over dark barista shirt, orange trainer top, burgundy usher vest, purple games polo, red lifeguard top with yellow shorts, khaki-green guide shirt, lavender housekeeper dress. Hats and working tools remain.
Staff scale: gym/games/pool/closet 0.8, noodle 1.0, lounge 0.6, cinema 0.72, both treehouses 0.55, maintenance 0.8. Coordinates and all theme overrides updated. Larger staff occupy aisles/edges rather than guest stations, with feet on the room or cabin floor. Some small-room source canvases share broad transparent bounding rectangles, but character silhouettes are separated from diners.
Clerk, clerk_blink, clerk_blink_1 and clerk_blink_2 now wear a navy blazer, gold trim and navy cap; face/eye differences and anchors are preserved. Classic lobby remains 480 x 168, with warm peach wallpaper and soft stripes; the rightmost 120 px elevator wall stays plain peach.

## Maintenance
- rooms/maintenance.svg, gold_maintenance.svg, pink_maintenance.svg: 160 x 168 service-workshop interiors with a tool wall, wooden workbench and toolbox; no baked-in worker.
- chars/staff_maintenance.svg and _1..4.svg: 56 x 96 repair person in blue overalls with a moving wrench. 4 fps. New maintenance metadata room has slots=[], a staff descriptor and Gold/Pink overrides.
- ui/broken.svg: 40 x 40 red repair-status circle with white X and a small wrench.
- ui/broken_overlay_1..4.svg: 160 x 168, stable grey tint at 25% alpha plus loose wires, a faint drop and puddle. Four gently cycling frames at 4 fps. Furniture remains visible.

## Guest rating faces
ui/face_1.svg through face_5.svg: 48 x 48, designed for 28 px. Red angry, orange frown, yellow neutral, light-green smile, bright-green big grin. Each has an ink outline and white top-left highlight.

## Preview and handoff
preview.html now includes ten room studios, the three occupied gym stations, nine staff loops including maintenance, separate run/lift/stretch players, a maintenance-overlay player and a 28 px face strip. Guest identity, room style, occupancy and global pause/scale controls remain. CODE_NOTES.md describes changes Claude must make to capacity, label rendering and the new service room. Art metadata alone does not change gameplay capacity or create the maintenance room type.

## Validation
Added 73 SVG keys, including the three newly registered belt-effect files. All 1309 SVGs passed XML, exact width/height/viewBox, safe vector markup, manifest path and preview dimension checks. Every original manifest entry and canvas size was retained. Largest file: 9727 bytes. Preview initialization checked 1309 assets with zero failures, and 234 identity/theme/occupancy combinations passed with three gym activities and ten persistent staff placements. items.js is byte-for-byte unchanged. Code was not edited by this task; index.html changed independently during this art batch. Browser gameplay was not verified.
