# Current treehouses: flat room box on a trunk
This replaces all earlier sloped-roof, canopy and rooftop-deck proposals.

Each cabin is a normal rectangular room at the top of its canvas, exactly 168 px high and full width. Its top edge is flat at y0, with a solid top strip for flush stacking. Fairy lights and thin vine/leaf trim stay INSIDE all four edges; nothing extends above the box. The rich timber interior includes lantern, bookshelf, rug and reading seats, with no baked AC or windows.

- treehouse_2x2:320x336; top 168 px room, lower 168 px open-air tree, twisted central trunk, short corner-support branches and roots.
- treehouse_2x3:320x504; same top 168 px room, lower 336 px tree with a knot and a side branch supporting a rope swing.
- treehouse_1x2:160x336; slim room on a straight central trunk.

All have rooms/<id>.svg, building/<id>_branch.svg and building/<id>_cabin.svg. Component canvases are identical to the combined art. Draw branch first, cabin second. Outside the cabin/tree/vines is transparent. Room art has no full-footprint outdoor background rectangle.

room_layouts.js: wallBounds x0,y0,width=canvasWidth,height 156; floorBounds x0,y156,width=canvasWidth,height 12; frameBounds x0,y0,width=canvasWidth,height 168; guestBaseline 156; supportBounds x0,y0,width=canvasWidth,height 8. Wall and floor bounds together cover the complete top room box. Guests/guide and furniture must use that box, not the full canvas bottom.

amenity_animations.js keeps4 reading guests for2x2,6 for 2x3, and adds 2 for 1x2. The guide is permanent staff and does not consume a guest slot. The rope swing is decorative. See CODE_NOTES.md for open-air rendering, catalog and stacking handoff. index.html was not edited.
