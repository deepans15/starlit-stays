# Starlit Stays theme collections

Original cozy vector artwork with rounded ink outlines. All amenity styles keep the top-left 120 x 44 room-name area clear. Guest rooms stay plain and use placeable furniture.

## Love
Room styles: love_lounge (320 x 168), love_noodle (320 x 168), love_cinema (320 x 336), love_pool (480 x 168).
Furniture: love_bed, love_loveseat, love_rug, love_roses, love_mirror, love_mobile.
Palette: rose, blush, cream, mint and warm gold; original heart and rose motifs.

## Halloween
Room styles: halloween_lounge (320 x 168), halloween_noodle (320 x 168), halloween_cinema (320 x 336), halloween_pool (480 x 168).
Furniture: halloween_bed, halloween_pumpkin_lamp, halloween_ghost_chair, halloween_rug, halloween_bat_art, halloween_cauldron.
Palette: lavender, pumpkin orange and mint; friendly ghosts, bats and glowing pumpkins.

## Winter
Room style: winter_lounge (320 x 168).
Furniture collection:
- winter_bed: Snowfall Bed, bed, 112 x 64, 480 coins, 8 decor, level 4; guest rooms only.
- winter_armchair: Frost Knit Armchair, floor, 64 x 60, 280 coins, 5 decor, level 4.
- winter_pine: Snowcap Pine, floor, 48 x 60, 160 coins, 4 decor, level 2.
- winter_snowglobe: Woodland Snow Globe, floor, 52 x 56, 320 coins, 5 decor, level 5.
- winter_rug: Snowflake Rug, floor/back, 120 x 14, 180 coins, 5 decor, level 3.
- winter_mobile: Snowflake Mobile, ceiling, 84 x 60, 560 coins, 8 decor, level 8.
Palette: icy sky blue, snowy cream, evergreen and honey wood. The bed uses the existing left pillow and mattress height for sleeping overlays.

## Loading and placement
Every SVG is listed in manifest.js. Furniture is also in items.js, using plain ASCII without emoji fields. Winter entries provide w/h as requested plus width/height, which the current game loader requires; all four values describe file pixels. The game displays furniture at half those dimensions.

The current brief supports styles named <theme>_<roomtype>.svg automatically. Love, Halloween and winter use that convention and existing room dimensions. The game offers these styles for 250 coins and grants a collection bonus for at least three matching furniture pieces, according to the brief.

## Animations
Numbered clerk blink files: clerk_blink_1 (half blink), clerk_blink_2 (closed). clerk_blink.svg is an identical closed-eye alias for the current game and brief. Preview timing: open for 3.6 seconds, half blink for 0.08, closed for 0.16, half blink for 0.08.
Cleaner sweep has two poses at 4 fps; feet and body remain aligned to cleaner.svg.
Noodle, cinema and pool each have three transparent effect frames at 4 fps. They line up with the original amenity art. Their dimensions and occupied areas are unchanged across frames. Effect files contain only steam/tassels, screen content, or water highlights/ripples.

## Treehouse room concepts
rooms/treehouse_2x2.svg: 320 x 336, two cells wide and two floors tall.
rooms/treehouse_2x3.svg: 320 x 504, two cells wide and three floors tall.
These are original amenity/building room designs, not guest-room overlays. Both feature a leafy wooden cabin, porch, lantern and ladder; the taller version adds a reading deck and rope swing. Both preserve the room-name area.
These are new room types, so Claude must add their gameplay definitions and build-menu entries. They are registered and previewable, but are not a style for an existing room type. index.html was not edited. See TREEHOUSES.md for the art handoff.


## Gold
All-gold room styles: gold_lobby, gold_closet, gold_fit, gold_noodle, gold_lounge, gold_cinema, gold_games, gold_pool. Each uses the corresponding normal room dimensions; the lobby elevator area and all room-name areas remain clear.
Matching collection: gold_bed, gold_chaise, gold_lamp, gold_mirror, gold_rug, gold_chandelier. Champagne cream, warm yellow gold and antique-gold shading with the shared ink outlines. Premium unlocks span levels 5 to 15. The bed enables Gold guest-room bundles through the current furniture collection system; guest rooms still have no room-art overlay.

## Pink
All-pink room styles: pink_lobby, pink_closet, pink_fit, pink_noodle, pink_lounge, pink_cinema, pink_games, pink_pool. Each matches its normal room dimensions and preserves clear name/elevator areas.
Matching collection: pink_bed, pink_sofa, pink_lamp, pink_vanity, pink_rug, pink_wallart. Blush velvet, rose wood and soft pale pink, with scallops and ribbon details. These are distinct from the existing Love collection. Unlock levels 2 to 6. The pink bed also enables themed guest-room bundles.

## Additional mix-and-match decor
pebble_fountain: floor, 52 x 68, 560 coins, 8 decor, level 7.
succulent_shelf: wall, 72 x 48, 240 coins, 5 decor, level 4.
reading_bench: floor, 96 x 56, 300 coins, 6 decor, level 5.

## Animated scenery
Five new backgrounds: cloud_day, sunset_lanterns, starlit_night, aurora, petal_garden. Each has a 960 x 540 opaque base and twelve matching transparent motion frames at 4 fps (three-second loop). Every frame is an SVG asset, without animation scripts or embedded images. backgrounds.js describes the sequences; preview.html plays them. Game code currently draws its own procedural sky, so Claude must connect these scenery assets before they appear behind the hotel. See BACKGROUNDS.md.
