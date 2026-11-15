# Richer classic interiors and branch-built treehouses

## Scope
User selected all classic interiors. Sixteen classic room SVGs were updated, plus Gold/Pink maintenance and the four treehouse building layers. Existing theme identities and the other theme room files remain intact. Every original filename, canvas size, manifest entry and item value is retained. Six new placeable decor items were added. No game-code files were edited.

## Treehouses: architecture rather than a leaf frame
Both canvases stay 320 x 336 and 320 x 504. The cabins now have dark teal timber walls, an irregular layered roof, warm timber posts, window and porthole, built-in bookshelves, clock, framed map, AC, brass pendant, string lights, lantern, cushions, reading furniture and a small display table. A clear band remains for guests' faces and bodies.
The support tree is leafless: irregular tapered forked branches, bark knots, uneven exposed roots and curved timber access steps. Branches visibly spread beyond the cabin frame into transparent open air. A continuous central trunk carries the cabin. The taller tree adds an open curved lookout deck, hammock and telescope; these are decorative rather than extra gameplay slots.
The two combined room SVGs match their corresponding branch/cabin layers. Main wallBounds x26,y78,w268,h134; floorBounds x17,y212,w286,h16; frameBounds x17,y76,w286,h152. guestBaseline=212. Reading slots, foreground masks and guide anchors were updated. Capacities remain four/six.

## Stronger room palettes
- Nook/Tall: saturated warm blush with window contrast and dark floor bands.
- Comfy: golden-ochre stripes, ivory window accents and a walnut floor.
- Grand: stronger lilac damask, dark floor and a ceiling hook.
- Loft: slate-blue brickwork, tall glass, black pendant, split AC and a dark floor.
- Noodle: deep crimson, brass lanterns, warm counter and dark timber floor. Food still appears only for occupied slots.
- Lounge: deep sage/teal panelling, copper-toned lighting, AC and warm wood under the existing seating.
- Gym: bright tile with chrome-toned equipment, AC and a charcoal tiled floor. Three stations and guest anchors unchanged.
- Pool: glazed tiles, more substantial deck colour, AC and a brass light. Pool geometry and swimmers unchanged.
- Games: deep aubergine, cyan accents, dark floor, black pendant and AC. Cabinet/guest positions unchanged.
- Cinema: darker plum, charcoal floor and AC. Seats and correctly placed viewers retain their coordinates.
- Closet: dark chocolate panelling and a dark floor; the shelves and cart remain.
- Maintenance: full dark timber workshop with overhead task light, wall vent, cabinet, a populated pegboard, workbench, drawers, tool case, oil can, spool, vice, parts boxes and exposed pipe. Gold/Pink versions keep their own hues at the same richer contrast.
- Lobby: green tree mural/panelling, dark plank floor and a longer brass-trimmed reception desk. The middle remains open and the rightmost 120 px is a plain elevator bay. Gold elevator doors and clerk are separate sprites, demonstrated in the preview composition.
All boxed rooms fill their scene edge to edge. Trees retain transparent outdoor space. Guest rooms keep their furniture separate; these backgrounds contain architecture/fixtures rather than baked-in beds.

## Six placeable pieces
| ID | Size | Zone/category | Coins | Level | Decor |
|---|---|---|---:|---:|---:|
| split_air_conditioner | 84 x 36 | wall/wall | 260 | 4 | 5 |
| industrial_pendant | 48 x 60 | ceiling/lighting | 240 | 4 | 5 |
| brass_cabin_lantern | 40 x 60 | floor/lighting | 180 | 3 | 4 |
| workshop_tool_cabinet | 72 x 88 | floor/tables | 420 | 6 | 7 |
| woven_storage_basket | 48 x 40 | floor/tables | 130 | 2 | 3 |
| branch_display_shelf | 88 x 48 | wall/wall | 300 | 5 | 6 |
Each is registered in manifest.js and items.js. Existing categories and tabletop placement fields are preserved. AC is currently artwork/decor; no cooling or emergency gameplay was added.

## Preview and sources
preview.html includes a sixteen-room comparison, a composed lobby with clerk and golden elevator, six decor cards and the existing occupied-room/empty-room studios. All existing controls remain.
Contemporary real-world material and lighting references were consulted for the design direction, without using their images, geometry or branded objects: Helen & Hard Woodnest II (https://helenhard.no/work/woodnest-2023/) and Snohetta's 7th Room (https://snohetta.prezly.com/the-7th-room). The resulting graphics, branches, furniture and room layouts are original Starlit Stays designs. The supplied game reference informed colour blocking, not copied artwork.

## Validation
All 1329 registered SVGs passed XML, dimensions/viewBox, local-reference-only markup, file-size, manifest-path and preview-registration checks. Every prior key, canvas size and item entry was preserved. The largest SVG is 9727 bytes. Both treehouse component layers match the combined room geometry exactly. Preview initialized 1329 assets with zero failures; all 234 guest/theme/occupancy combinations passed, including empty-room prop suppression and all ten staff placements. Dedicated galleries include sixteen classic rooms, six new decor cards and a composed lobby. Browser gameplay was not verified.
