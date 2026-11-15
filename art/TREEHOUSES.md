# Treehouse art handoff

Coordinate convention: footprint = cells wide x floors tall; each cell is 160 px wide and each floor is 168 px tall. The game renders at half file size.

## Canopy Cabin: 2 x 2
Asset and manifest key: rooms/treehouse_2x2.svg / rooms/treehouse_2x2.
File: 320 x 336. Build footprint: width 2 cells, height 2 floors (4 blocks).
Leaf-roof cabin, warm window, porch planter, hanging lantern and access ladder.

## Treetop Reading Retreat: 2 x 3
Asset and manifest key: rooms/treehouse_2x3.svg / rooms/treehouse_2x3.
File: 320 x 504. Build footprint: width 2 cells, height 3 floors (6 blocks).
Larger tree, cabin and porch, second reading deck with a cushioned seat, book and rope swing, full-height ladder, lower hammock terrace and wooden landing.

## Claude integration
Add these as amenity room types rather than guest-room overlays. Use type IDs treehouse_2x2 and treehouse_2x3 so the existing rooms/<type> sprite lookup can find the files. Set w=2, h=2 or h=3; choose room prices, unlock levels, guest capacity, revenue and XP in the gameplay code. Add guest demand/build-menu support if required by the game. The art has a plain 120 x 44 area at top left for room names. Art-only files do not register new gameplay room types.

The art manifest and preview already include both designs. No game-code changes were made.
