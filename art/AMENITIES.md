# Current amenity action artwork

All 13 identities have 13 eight-frame activities (169 loops, 1,352 frames). Source frames are original self-contained SVGs. The table below is authoritative; older four-frame/hardcoded sizes are superseded.

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

amenity_animations.js contains 13 room layouts, including the two new three-guest Laundry/Chill amenities and the slim two-reader treehouse. Each style override supplies current slots/staff/foreground. Cups and popcorn follow activityOffsets in the current guest frame; props only appear on occupied slots. Keep one z-sorted room draw list so rear cinema seats cannot cover front heads. Tea guests no longer have seat-wide knee masks. All treehouse activity anchors use the top room box floor at156.

preview.html plays every action at eight frames, supports all 13 identities and all existing room styles, and offers all/one/empty occupancy to test props and permanent staff. See UPDATE_NOTES.md and CODE_NOTES.md for exact assets and integration. This art batch does not edit index.html.
