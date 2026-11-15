# Starlit Stays weather assets

All weather frames are transparent 960 x 540 SVGs, self-contained, without scripts, SVG animation elements, external links or embedded images, and under 60 KB each. Sequences have twelve frames. Metadata is plain ASCII in weather.js as window.STARLIT_WEATHER. Every frame key is extensionless and registered in manifest.js.

| Effect | Times | Chance | FPS | Loop | Back layer | Front layer |
|---|---|---:|---:|---|---|---|
| rain | morning, day, evening, night | 2 | 8 | 1.5 s | Constant 25% grey-blue overcast tint, thin distant streaks | Sparse diagonal drops and tiny bottom splash rings |
| drizzle | morning, day | 2 | 8 | 1.5 s | Lighter 10% tint and fewer, shorter distant drops | Fewer short drops and faint tiny splash rings |
| snow | morning, day, night | 1 | 4 | 3 s | Constant 7% pale-cool tint and distant snow | Small round flakes drifting down and sideways |
| sun_rays | morning, day | 3 | 4 | 3 s | Warm diagonal rays, smoothly breathing at low opacity | A few tiny warm sparkles |
| fog | morning, evening | 1 | 4 | 3 s | Soft radial-gradient white mist bands near the ground | None: front array is empty and no front files exist |
| fireflies | evening, night | 2 | 4 | 3 s | None: back array is empty and no back files exist | Tiny yellow-green dots with small diffuse glows |
| leaves | day, evening | 2 | 4 | 3 s | None: back array is empty and no back files exist | A few small autumn leaves tumbling across |

## Front layer must remain subtle
The whole front-layer group is capped at 32% opacity (28% for drizzle), so overlapping particles can never exceed that layer cap. Individual particle opacities reduce this further. Visible front elements are well below 40 px: rain drops at most about 20 px, splash rings under 15 px, snow under 6 px, sparkles under 7 px, firefly glows 12 px, and leaves under about 21 px after rotation. No full-screen front tints, broad shapes, flashes, strobing or lightning are used.

Most particles occupy the outer quarters. Centre particles are substantially fainter, and leaves ease toward lower opacity through the centre. Fog bands, overcast tints and light rays belong only to the back layer. Periodic functions produce slow fades; falling particles wrap with zero opacity. Consecutive frames and last-to-first transitions should be checked for smooth changes when editing.

## Metadata and selection
chance is a relative selection weight, not a percentage. Filter effects by whether their times array contains the scene time, then select by weight. The preview deliberately allows any scene/effect pairing for inspection and explains when the pairing is outside the recommended times. Missing layers are represented by empty arrays, not invented files.

## Draw order and timing for Claude
1. Draw the selected opaque scene base.
2. Draw that scene's motion frame at its own fps.
3. Draw weather back at the weather effect's fps.
4. Draw the hotel and gameplay content.
5. Draw weather front over the game, using the same scene-sized viewport rectangle.
6. Keep UI text and controls readable; front particles are sparse and faint throughout, especially centrally.

Frame index is floor(elapsedSeconds * fps) % 12. Scene and weather clocks use their own frame rates. Keep base, ambient, back and front layers registered to the same 960 x 540 coordinates and cover-scaling crop. Pause motion with game pause or reduced-motion preferences. The current art batch does not modify index.html or implement runtime weather selection.

## Preview
Open art/preview.html and use Scene and Weather selectors. Back layer, Front layer and Sample hotel checkboxes make compositing and room readability easy to inspect. Global Pause and Display size controls also apply. All nine scenes and all seven weather effects can be mixed freely. The asset gallery separately shows every new frame and checks image dimensions.
