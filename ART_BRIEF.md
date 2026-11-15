# Starlit Stays — Art Brief for ChatGPT / Codex

You are the **art designer** for *Starlit Stays*, a cozy side-view hotel-building game that runs in the browser (later on Android).
Claude handles the game code and mechanics. **You only make art files.**

Project folder: `C:\Users\deepa\Documents\StarlitStays\`

```
StarlitStays\
  index.html          <- the game (Claude's file — never edit it)
  ART_BRIEF.md        <- this brief
  art\
    manifest.js       <- list of finished art files (you keep this updated)
    preview.html      <- open in a browser to check your art
    chars\  rooms\  decor\  building\  icons\
```

## Rules

1. Write files **only inside `art\`**. Never edit `index.html` or anything outside `art\`.
2. Format: **SVG** (preferred: hand-written vector, crisp at any size). PNG with transparent background is allowed if needed.
3. Every SVG must have `width`, `height` and `viewBox` set to the **exact size in the table below**, e.g. `<svg xmlns="http://www.w3.org/2000/svg" width="56" height="96" viewBox="0 0 56 96">`.
4. Self-contained: no external images, fonts, links or scripts. No text or letters inside the art. Keep each file under 60 KB.
5. Transparent background unless the table says the art fills the whole room.
6. **Original designs only.** Do not copy or imitate Hotel City, Playfish, EA, The Sims, or any other game's characters, logos or art. Do not trace screenshots.
7. After adding or changing a file, add it to `art\manifest.js` (format below). The game only uses files listed there; anything missing falls back to the built-in placeholder shapes.
8. Check your work by opening `art\preview.html` in a browser. It shows each asset at size and flags wrong dimensions.

## Style guide

- Cozy, warm and friendly. Flat vector with soft shading, rounded shapes, **2–3 px rounded outlines in `#2b2340`**.
- Palette: ink `#2b2340`, cream `#fff8ef`, peach `#ffb38a`, rose `#ff7a90`, mint `#6fd3b5`, sky `#7ec8ff`, gold `#ffc94d`, wood `#c8915f`, leaf `#43aa8b`. Add softer tints as needed.
- Characters: cute chibi proportions (big head, small body, about 2.5 heads tall), simple dot eyes, varied hairstyles, skin tones and outfits so a crowd looks diverse.
- Light comes from the top-left.

## Asset list (sizes in pixels)

The game draws everything at half the file size, so files are 2× for sharp phone screens.

### Characters — `art\chars\` — transparent, full body, **facing right**, feet touching the bottom edge, centred horizontally
| File | Size | Notes |
|---|---|---|
| `guest_1.svg` … `guest_6.svg` | 56 × 96 | Six different hotel guests (travellers, a backpacker, a business person, a grandparent, etc.) |
| `inspector.svg` | 56 × 96 | A mysterious hotel inspector: top hat, monocle, clipboard. Rare guest who gives a bonus |
| `clerk.svg` | 56 × 96 | Front-desk clerk in a uniform, standing (lower body will be hidden behind the desk) |
| `cleaner.svg` | 56 × 96 | Housekeeper with a mop or broom |
| `helper.svg` | 144 × 208 | **The game's mascot and tutorial guide**: a cheerful bellhop who welcomes new players and points out what to do. Bigger and more detailed than guests, waving or pointing. Make it clearly original: a teal coat with gold buttons and a small star-shaped cap (not a red uniform or a round red hat) |

### Rooms — `art\rooms\` — one cell is 160 wide, one floor is 168 tall
Amenity, closet and lobby art **fills the whole room** (walls, floor and furniture, opaque is fine).
**Guest rooms have no room art.** They start completely empty except for a bed, and players decorate them with furniture. So don't draw guest-room overlays (no `nook`, `comfy`, `tall`, `grand` or `loft` files). Keep the **top-left 120 × 44** area clear in every room you do draw (the game writes the room name there).

| File | Size | Notes |
|---|---|---|
| `lobby.svg` | 480 × 168 | The lobby is **3 cells wide** and contains the hotel's elevator. Reception desk at the far left (desk top at about y = 100). **Leave the right-most 120 px plain wall**: the game draws the elevator doors there (from `building\elevator.svg`). Leave the middle mostly open: guests queue there and players add their own furniture. The clerk is drawn separately behind the desk at about x = 28–84 |
| `closet.svg` | 160 × 168 | Linen closet: shelves with folded towels, a laundry cart |
| `fit.svg` | 320 × 168 | Small gym: treadmill, weights, mirror |
| `noodle.svg` | 320 × 168 | Noodle bar: counter, stools, steaming bowls, paper lanterns |
| `lounge.svg` | 320 × 168 | Tea lounge: sofa, armchair, teapot, bookshelf |
| `games.svg` | 320 × 168 | Game nook: three original arcade-style cabinets, beanbags (no real brands) |
| `pool.svg` | 480 × 168 | Indoor pool: water, tiles, ladder, a deck chair |
| `cinema.svg` | 320 × 336 | Mini cinema (two floors tall): screen at the top, two rows of red seats near the bottom |

### Furniture — `art\decor\` — transparent, side view
Players buy furniture and **drag it around inside rooms**, so every piece must look good on its own, against any wallpaper colour. Floor pieces sit on the bottom edge of the file; wall and ceiling pieces fill their box.

| File | Size | Zone | Notes |
|---|---|---|---|
| `bed_basic.svg` | 112 × 64 | bed | Simple single bed, pillow on the left (guests sleep with their head there) |
| `bed_fluffy.svg` | 112 × 64 | bed | Fancy bed, pillow on the left, plush quilt |
| `plant.svg` | 48 × 60 | floor | Potted plant |
| `lamp.svg` | 44 × 80 | floor | Floor lamp |
| `wallart.svg` | 60 × 44 | wall | Framed picture |
| `rug.svg` | 120 × 14 | floor | Flat round rug seen from the side (drawn behind other furniture) |
| `armchair.svg` | 64 × 60 | floor | Comfy armchair |
| `clock.svg` | 40 × 40 | wall | Wall clock |
| `bookshelf.svg` | 64 × 104 | floor | Tall bookshelf with books and ornaments |
| `tv.svg` | 76 × 68 | floor | TV on a low cabinet (generic, no brands) |
| `chandelier.svg` | 84 × 60 | ceiling | Hanging chandelier, chain at the top |
| `aquarium.svg` | 84 × 68 | floor | Fish tank on a stand |
| `statue.svg` | 52 × 100 | floor | Golden statue on a plinth (an original figure, e.g. a star or a bird) |

**Adding new furniture.** You can invent more pieces. For each one:
1. Draw `art\decor\<id>.svg` (id = lowercase letters, numbers and `_`).
2. Add it to `art\manifest.js` as `"decor/<id>": "decor/<id>.svg"`.
3. Add an entry to `art\items.js` (the file explains every field). Example:
   `{ id:"beanbag_chair", name:"Beanbag Chair", zone:"floor", width:64, height:48, cost:140, decor:4, level:2, emoji:"🫘" },`
   Keep prices and decor points in line with the table in the game: about 1 decor point per 25–90 coins, with fancier pieces costing more per point. Spread unlock levels from 1 to 15.
The game picks new pieces up automatically and adds them to the shop. You can also change a built-in piece by adding an entry with its id.

### Building — `art\building\`
| File | Size | Notes |
|---|---|---|
| `elevator.svg` | 88 × 124 | Golden elevator doors, closed, with a frame, front view. Shown at the right end of the lobby |
| `elevator_open.svg` | 88 × 124 | The same doors slid open, dark inside. Shown while guests step in or out |

### Buttons — `art\ui\` — the round buttons in the bottom-right corner
Simple, bold icons on a transparent background (the game draws the coloured button behind them). They should read clearly at small sizes.
| File | Size | Notes |
|---|---|---|
| `build.svg` | 96 × 96 | A hammer (the main button: opens the Build menu) |
| `expand.svg` | 96 × 96 | Expand the hotel: a building block with arrows pointing outwards |
| `goals.svg` | 96 × 96 | Goals: a target or a little flag |
| `settings.svg` | 96 × 96 | Settings: a gear |
| `open.svg` | 96 × 96 | Start / open the hotel: a reception bell |

### Top of the screen (HUD) — `art\ui\` — transparent, floats over the sky with no box behind it
| File | Size | Notes |
|---|---|---|
| `coin.svg` | 80 × 80 | Gold coin shown next to the coin count |
| `level.svg` | 96 × 96 | Level badge (a little house shape works well); the game writes the level number in its centre |
| `blocks.svg` | 64 × 64 | Building block, next to "7/12" blocks used |
| `star_full.svg`, `star_half.svg`, `star_empty.svg` | 56 × 56 | The 7-star rating row (gold, half gold, and pale empty) |
| `speed.svg` | 64 × 64 | Fast-forward symbol for the game speed button |

### Icons — `art\icons\` — transparent, simple, readable at small size (shown in guests' thought bubbles)
| File | Size | Notes |
|---|---|---|
| `fit.svg`, `noodle.svg`, `lounge.svg`, `cinema.svg`, `games.svg`, `pool.svg` | 64 × 64 | Dumbbell, noodle bowl, teacup, film reel, joystick, swim ring |

## Themes (no code needed)

The game finds themes from your file names automatically:

- **Room styles:** draw `art\rooms\<theme>_<roomtype>.svg` at the same size as the normal room (for example `rooms\love_lounge.svg` for the Tea Lounge, `rooms\winter_noodle.svg` for the Noodle Bar). Players can switch that room to your style for 250 coins. Room types: `lobby`, `closet`, `fit`, `noodle`, `lounge`, `cinema`, `games`, `pool`. Not guest rooms, which stay plain.
- **Furniture collections:** give 3 or more pieces the same id prefix, like `love_bed`, `love_rug`, `love_roses`. They're grouped as a collection in the shop, and a room with 3+ pieces from one collection gets a set bonus.
- Keep a short note of each theme in `art\THEMES.md`.

## Animations

Animations are **extra frames**: separate SVG files that the game swaps between. Name them `<base>_<animation>_<frame number>`. Every frame must be:

- the **same size** as its base file (e.g. 56 × 96 for characters)
- **lined up** with the base: same feet position, same head height, same centre. Only the moving parts change, so the character doesn't jitter.
- listed in `manifest.js` like any other file.

The game plays frames at the speeds below and loops them. If any frame is missing, it shows the still base file instead, so you can add animations one character at a time.

### Character animations — `art\chars\`
| Files | Size | Frames and speed | What to draw |
|---|---|---|---|
| `guest_1_walk_1.svg` … `guest_1_walk_4.svg` (repeat for `guest_2` … `guest_6`) | 56 × 96 | 4 frames, 8 per second | Walk cycle facing right: 1 = right foot forward, 2 = legs passing, 3 = left foot forward, 4 = legs passing. Arms swing opposite to legs. Head bobs up about 2 px on frames 2 and 4 |
| `inspector_walk_1.svg` … `inspector_walk_4.svg` | 56 × 96 | 4 frames, 8 per second | Same walk cycle for the inspector, clipboard held still |
| `guest_1_sleep.svg` … `guest_6_sleep.svg`, `inspector_sleep.svg` | 112 × 64 | 1 frame | The guest lying asleep in bed, side view: head on the pillow at the left, body under the blanket, eyes closed. Drawn **on top of the bed**, so draw only the head, shoulders and blanket, lined up with `decor\bed_basic.svg` (pillow at the left, mattress top at about y = 24). The game adds the floating "z" |
| `clerk_blink.svg` | 56 × 96 | 1 frame, shown briefly every 4 seconds | The clerk with eyes closed, otherwise identical to `clerk.svg` |
| `cleaner_sweep_1.svg`, `cleaner_sweep_2.svg` | 56 × 96 | 2 frames, 4 per second | Mop or broom swung to the left, then to the right |

### Room animations — `art\rooms\`
These are **overlays** drawn on top of the room art, so each frame is the **same size as its room**, transparent everywhere except the moving parts.
| Files | Size | Frames and speed | What to draw |
|---|---|---|---|
| `pool_fx_1.svg` … `pool_fx_3.svg` | 480 × 168 | 3 frames, 4 per second | Shimmering highlights and small ripples on the water surface |
| `noodle_fx_1.svg` … `noodle_fx_3.svg` | 320 × 168 | 3 frames, 4 per second | Steam curling up from the bowls, lanterns swaying slightly |
| `cinema_fx_1.svg` … `cinema_fx_3.svg` | 320 × 336 | 3 frames, 4 per second | Changing light and colours on the screen (abstract shapes, no real films) |
| `games_fx_1.svg` … `games_fx_3.svg` | 320 × 168 | 3 frames, 4 per second | Blinking cabinet screens and buttons |
| `fit_fx_1.svg` … `fit_fx_3.svg` | 320 × 168 | 3 frames, 4 per second | Treadmill belt lines moving, a fan turning |
| `lounge_fx_1.svg` … `lounge_fx_3.svg` | 320 × 168 | 3 frames, 4 per second | Steam from the teapot, a flickering lamp |

Open `art\preview.html` to watch each animation play, side by side with its frames.

## manifest.js format

The key is the path without the extension; the value is the file path inside `art\`:

```js
window.STARLIT_ART = {
  "chars/guest_1": "chars/guest_1.svg",
  "chars/guest_2": "chars/guest_2.svg",
  "rooms/fit": "rooms/fit.svg",
  "decor/bed_basic": "decor/bed_basic.svg"
};
```

Only list files that exist. Keep it valid JavaScript (commas between entries, no trailing comma after the last).

## Suggested order

1. `chars/guest_1` – `guest_6`, `clerk`, `cleaner`, `inspector` (done), then `chars/helper`
2. Furniture: `decor/*`, starting with the beds, then everything else in the table
3. `rooms/lobby` (480 × 168), `building/elevator`, `building/elevator_open`, `rooms/closet`, `rooms/fit`
4. The other amenity rooms
5. `icons/*`
6. Animations: walk cycles first (they matter most), then sleep poses, clerk blink, cleaner sweep, then the room effects

When you finish a batch, list the files you made so Deepan can tell Claude to pull them into the game.
