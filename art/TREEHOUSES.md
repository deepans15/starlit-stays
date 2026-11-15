# Rooms resting on exposed tree branches

## Artwork
The existing treehouse_2x2 and treehouse_2x3 room IDs now show the requested design: a literal enclosed, furnished cabin sitting on a thick tree branch. The branch area has no wallpaper, room walls, rectangular floor background or enclosing frame. All space outside the cabin/tree/ropes is transparent, so the selected scenery can show through.

- rooms/treehouse_2x2.svg: 320 x 336, two cells wide and two floors tall. Furnished cabin, exposed support branch, trunk, leaf crown, rope ladder and swing.
- rooms/treehouse_2x3.svg: 320 x 504, two cells wide and three floors tall. Same cabin, longer open trunk and ladder, hammock and second exposed branch with a planter.

The enclosed cabin is a cutaway so its opaque back wall, side posts, roof, floor, bookshelf, framed picture, reading bench, armchair, tea table and pendant lamp are visible.

## Separate layers and exact bounds
For each size, building/treehouse_2xN_branch.svg contains only exposed tree/branch/rope details, while building/treehouse_2xN_cabin.svg contains the furnished enclosed cabin. The combined rooms asset draws branch first, then cabin. All share exactly the same canvas and placement.

room_layouts.js defines window.STARLIT_ROOM_LAYOUTS. Coordinates are in SVG file pixels and must be halved for the game's normal draw scale:
- wallBounds: x=36, y=64, width=248, height=132.
- floorBounds: x=32, y=196, width=256, height=12.
- frameBounds: x=32, y=64, width=256, height=144.
- guestBaseline: y=196, the cabin's floor level.
- Full placement footprint remains 320 x 336 or 320 x 504.

## Required gameplay renderer handoff for Claude
Current index.html already registers both treehouse room types, but drawRoom() paints a solid wall, floor and edge frame over the full rectangular footprint before/after drawing the sprite. Transparent SVGs alone cannot erase that paint. To make the open branch area visible in gameplay:

1. Load room_layouts.js or copy these art bounds into the room definitions, and mark the treehouse types as open-air layouts.
2. For these types, skip the full-footprint wall/floor fill and full rectangular edge(). Draw the cabin walls/floor/frame only inside the corresponding bounds, or use the complete cabin art as supplied.
3. Draw the branch/cabin layers at the same full-footprint origin and size, without any wall behind the branch. The combined rooms SVG can also be used after the generic wall/floor/frame are suppressed.
4. Place amenity guests and floor furniture on guestBaseline/floorBounds, rather than at the bottom of the whole tree canvas. Restrict wallpaper, wall decorations and ceiling items to the cabin region.
5. Clip dirt/cleaning tints and room highlighting to the enclosed cabin rather than tinting the exposed sky rectangle. Keep placement/support calculations based on the original footprint unless gameplay design intentionally changes them.
6. Preserve the clear 120 x 44 top-left label area. Labels may keep their small existing UI badge above the art.

This art batch does not edit index.html. The preview demonstrates actual SVG transparency; the game needs the renderer adjustment above to reproduce it.

## Centred trunk redraw
Both cabin layers now sit centred over a thick trunk rising from the bottom centre. Exposed branches and leaves spread evenly to both sides; the ladder follows the trunk. The 2x3 size adds a lower balanced branch pair. Previously described swing, hammock and side-suspended details are superseded by this centred design. Updated bounds and four/six reading slots are in room_layouts.js and amenity_animations.js; see UPDATE_NOTES.md.
