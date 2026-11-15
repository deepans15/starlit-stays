# Room, staff and reward art update

## Scope
All work is inside art/. No edits were made to index.html. gold_closet.svg and pink_closet.svg are unchanged. Existing SVG file names and dimensions are retained. All original manifest entries remain. New text requested for STAFF, JACKPOT! and the crate question mark is hand-drawn vector paths, without fonts or text elements; this is the explicit exception to the brief's general no-lettering rule.

## Rooms
- rooms/closet.svg: 160 x 168; warm chocolate wood-panel wallpaper. Original shelves, towels and laundry cart retained.
- Cinema metadata: all five viewers use actual chair centres; four sit in back-row cushions (y=239) and one in the second front chair (x=120.5, y=303), at 0.72 scale. Classic, Love, Halloween, Gold and Pink share matching seat geometry, with explicit overrides. Back-row cushions draw at z7, front seat backs at z8, front viewer at z10, and front cushions at z12. Each viewer has an occupied-slot popcorn prop. No viewer occupies the gap between chairs.
- rooms/treehouse_2x2.svg (320 x 336), rooms/treehouse_2x3.svg (320 x 504) and their four building/ branch/cabin layers: centred, load-bearing trunks from the bottom middle; cabins rest on top, with balanced branches/leaves and a ladder up each trunk. The taller tree has a second pair of branches. Outside the cabin and tree is transparent.
- room_layouts.js: walls x36,y64,w248,h132; floor x32,y196,w256,h12; frame x32,y64,w256,h144; guestBaseline=196. All bounds are file pixels. Four/six reading slots and guide placements now stay inside the cabin.

## Staff (40 new SVGs)
For noodle, lounge, fit, cinema, games, pool, treehouse and closet: chars/staff_<id>.svg and chars/staff_<id>_1.svg through _4.svg. All 56 x 96. Four frames at 4 fps; fixed heads and feet, with working arms/props.
- Noodle: chef stirring a small pot.
- Lounge: barista pouring tea.
- Fit: trainer clapping encouragement.
- Cinema: usher holding popcorn.
- Games: attendant wiping with a cloth and holding a spray bottle.
- Pool: lifeguard using a whistle.
- Treehouse: guide holding a folded map.
- Closet: housekeeper folding a towel.
Each has a white STAFF name badge drawn as vector strokes. Both treehouse sizes use the same guide identity. amenity_animations.js gives every room and applicable style override a permanent staff descriptor. Closet is a new metadata-only room entry with no guest slots.

## Occupied-slot props (9 new SVGs)
- chars/prop_noodle_bowl_1.svg through _3.svg: 40 x 40, bowl/noodles and soft periodic steam.
- chars/prop_teacup_1.svg through _3.svg: 32 x 32, cup/saucer and soft steam.
- chars/prop_popcorn_1.svg through _3.svg: 32 x 36, striped popcorn carton with subtle settling.
All play at 4 fps. Each applicable slot has prop metadata (key, frames, fps, width, height, anchor, room-local x/y, scale and z). Props must only be drawn for occupied slots. Empty-room noodle bowls/food/steam and lounge teacups were removed in every supplied theme; counter/stools and permanent teapots remain. Noodle ambient frames now animate only lantern details. Guest watch/drink/drink_stand frames no longer contain duplicate held popcorn/cups; the conditional props replace them. All existing character dimensions and identities remain.

## Furniture categories and tabs
Every one of the 42 entries in items.js now has category: beds, seating, tables, lighting, wall, rugs or plants. All ceiling mobiles/chandeliers use lighting consistently. Tabletop display ornaments use tables, along with tables/carts/vanities. Existing item fields, costs and unlock levels are preserved.
New 48 x 48 tabs: ui/cat_beds.svg, cat_seating.svg, cat_tables.svg, cat_lighting.svg, cat_wall.svg, cat_rugs.svg and cat_plants.svg.

## Occupancy and rewards
- ui/slot_full.svg, ui/slot_empty.svg: 24 x 32. White person silhouette with ink outline; full is filled, empty is hollow with a softer outline.
- ui/crate.svg: 96 x 96 golden wooden crate with a question mark and star brace.
- ui/crate_open_1.svg through _4.svg: 96 x 96 progressive lid opening, warm burst and sparkles. Suggested one-shot playback at 8 fps, holding frame 4 after opening. Preview repeats with closed/open holds.
- ui/jackpot.svg: 360 x 90 gold ribbon with original drawn JACKPOT! lettering and sparkles.
- ui/coin_bag.svg: 96 x 96 warm sack of coins with a gold star emblem and sparkles.

## Preview / handoff
preview.html registers all dimensions, includes standalone working staff/prop/crate players, and shows nine room studios. Switch Guest and Room style to check every identity/theme. Occupancy has All seats, First seat only and Empty: staff remain while guest props disappear. Existing previews and global controls remain.
See CODE_NOTES.md for the new staff/prop/category/slot/reward rendering handoff. No game-code changes are included in this art batch.

## Validation
All 1236 registered SVGs passed XML, exact dimensions, local-reference-only markup, manifest and preview-dimension checks. The largest file is 9727 bytes. The preview script passed initialization and 234 identity/theme/occupancy combinations; all nine staff remain visible when empty, and slot props disappear. Cinema chair bounds and layer ordering passed for all five styles. The two protected closet theme files match their initial hashes. Game code was not edited by this task; it changed independently while this art batch was running. Browser gameplay was not verified.
