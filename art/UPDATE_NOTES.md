# Empty guest rooms and distinct beds

## Scope
Art folder only. No game-code edits. The four new guest-room backgrounds are explicitly requested exceptions to the older no-guest-room-art rule. Existing rooms/nook.svg is preserved. Every existing manifest key and SVG canvas size remains. Five existing theme beds retain 112 x 64, along with their previous prices, unlock levels and decor values.

## Empty backgrounds
- rooms/comfy.svg: 320 x 168, warm yellow ribbon stripes and a right-side window. Floor baseline y156; 12 px floor band.
- rooms/tall.svg: 160 x 336, soft pink pinstripes and a tall arched window. Baseline y324.
- rooms/grand.svg: 320 x 336, lilac damask and a simple ceiling hook, with a high window. Baseline y324; no chandelier is baked in.
- rooms/loft.svg: 480 x 336, sky-blue walls, tall glass windows and a short architectural gallery rail. Baseline y324.
All contain only wallpaper, windows/structural details, skirting and floor. No beds or furniture. Double-height rooms remain open wall/window space above one bottom floor, without an intermediate floor.

## New bed items (cheapest first)
| Item | Canvas | Level | Coins | Decor |
|---|---|---:|---:|---:|
| log_cabin_bed | 112 x 64 | 1 | 110 | 3 |
| cloud_bed | 120 x 60 | 2 | 200 | 4 |
| race_car_bed | 128 x 60 | 3 | 320 | 6 |
| round_bed | 120 x 56 | 4 | 440 | 7 |
| boat_bed | 128 x 64 | 5 | 580 | 9 |
| bunk_bed | 88 x 112 | 6 | 760 | 11 |
| hammock_bed | 128 x 72 | 7 | 900 | 12 |
| canopy_bed | 112 x 112 | 9 | 1200 | 16 |
| rocket_bed | 96 x 100 | 12 | 1800 | 22 |
| royal_bed | 136 x 96 | 15 | 2400 | 28 |

All are zone bed, category beds, rooms [guest], with matching width/height and w/h fields. New entries are in ascending cost/unlock order. Existing catalog fields and values are preserved. New side-view silhouettes feature wheels/spoiler/roundel, two bunks and ladder, four canopy posts with drapes, circular tufted upholstery, rocket cabin/porthole/fins, rowboat and oar, cloud upholstery, a suspended hammock, rustic log construction, and a crowned gilded headboard. All floor contacts reach the bottom of their own canvas. Number-roundel marking is drawn as paths, not text.

## Theme bed redraws
Love: heart headboard and heart foot detail. Halloween: octagonal coffin frame and bat-wing ends. Winter: curved sleigh ends and runners. Gold: sculpted rococo shell/scrollwork and curved apron. Pink: scalloped princess headboard, ruffled skirt and bow. All use the existing decor/<theme>_bed keys and 112 x 64 canvases.

## Placement and sleep metadata
Each new/redesigned bed has bedLayout metadata in items.js: mode, pillow centre, mattressTop and sleep bounds in file pixels. Bunk specifies the lower mattress for the current one-guest room and records upperMattressTop for possible future use. Rocket mode is upright and hammock mode is curved; these must not stretch a normal full-bed sleeping overlay across the entire tall canvas. See CODE_NOTES.md for integration details.

## Preview / validation
preview.html has a dedicated fifteen-bed comparison and four-room architecture gallery, plus the normal asset galleries. Global display size controls apply. All 1323 registered SVGs passed XML, exact dimensions/viewBox, self-contained markup, manifest and preview registration checks. Every original catalog value was retained; new entries have valid guest-only bed categories. Browser gameplay was not verified.

Preview script verification: 1323 assets initialized with zero failures; the dedicated gallery contains all 15 bed designs and four room backgrounds, and the existing animation clock still runs. Mattress continuity and each structural silhouette were inspected using local SVG renders.
