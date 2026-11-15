# Branch-built treehouse art
Both rooms are cutaway cabins carried on continuous central tree trunks, with irregular forked branches visible beyond the cabin frame. No leaf canopy is used. Outdoor air is transparent; no full-footprint wallpaper, background rectangle or room edge belongs behind the tree.

## Assets
rooms/treehouse_2x2.svg and rooms/treehouse_2x3.svg retain 320 x 336 and 320 x 504. For each size, building/<id>_branch.svg and building/<id>_cabin.svg use that identical full canvas; branch first, cabin second equals the combined room image. Branch layers contain bark, exposed roots, timber access steps and outdoor features. The 2x3 version also has an open lookout deck, hammock and telescope. Cabin layers include the rich teal/warm-timber interior, roof, windows, lights, AC and furniture.

## Current bounds (file pixels)
wallBounds: x26,y78,width268,height134.
floorBounds: x17,y212,width286,height16.
frameBounds: x17,y76,width286,height152.
guestBaseline: 212. Displayed game coordinates normally halve these values.
The roof extends above wallBounds and the branches extend outside frameBounds; draw the full combined/layer canvas, not a crop of the cabin bounds.

## Guests and integration
Existing four/six guest capacities remain. All reading positions and guide anchors use the main cabin floor. Foreground crops restore bench, chair and table fronts from the selected room image. The lower lookout is decorative, with no extra occupants.
Claude must consume the updated room_layouts.js and amenity_animations.js. Skip generic full-footprint wall/floor/edge rendering for open-air layouts. Restrict wallpaper, dirt, room tints and furniture placement to the cabin. Draw branch/cabin layers at one shared origin/size. Keep the sky visible around the tree. See CODE_NOTES.md and UPDATE_NOTES.md. This art batch does not edit index.html.
