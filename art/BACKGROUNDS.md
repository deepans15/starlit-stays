# Animated hotel backgrounds

Nine original 16:9 scenes, each 960 x 540 pixels:
- cloud_day: Drifting Cloud Day, pale-blue sky, moving cream clouds and mint hills.
- sunset_lanterns: Sunset Lanterns, peach dusk, distant town and softly floating lanterns.
- starlit_night: Starlit Night, quiet crescent moon and twinkling stars.
- aurora: Quiet Aurora, snowy distant mountains and gently shifting translucent light ribbons.
- petal_garden: Petal Garden, flowering branches at the edges and falling petals.
- sunrise_meadow: Sunrise Meadow, peach-gold light, dewy hills and slowly gliding birds.
- sunny_skyline: Sunny Skyline, bright sky, a softly breathing sun glow, distant town and fluffy clouds.
- golden_evening: Golden Evening, orange-pink sky, purple clouds, lamps fading on in sequence and early stars.
- moonlit_rooftops: Moonlit Rooftops, deep blue sky, a full moon, warm windows fading on and off and twinkling stars.

Each scene has one opaque base: backgrounds/<id>.svg, plus twelve transparent effects files: backgrounds/<id>_fx_1.svg through _fx_12.svg. At four frames per second, each seamless cycle lasts three seconds. Motion uses periodic phases; falling petals wrap with zero opacity at the edge of their cycle. No scripts or SVG animation elements are embedded in the assets. Every SVG is under 60 KB.

Metadata lives in backgrounds.js (window.STARLIT_BACKGROUNDS) and backgrounds/catalog.json. Manifest paths omit the extension in keys. preview.html reads the metadata, draws each base with its current overlay, and provides pause and display-size controls.

## Game handoff for Claude
The current index.html draws a procedural sky and skyline. It does not read backgrounds.js or these files yet. Do not assume manifest registration activates scenery selection.

1. Load backgrounds.js alongside manifest.js, and offer scene selection in the game UI if desired.
2. Render the selected base before the hotel, sidewalk, guests and HUD, using screen coordinates rather than world/camera coordinates.
3. Render the matching overlay at exactly the same rectangle and scale. Frame = floor(timeSeconds * 4) % 12 + 1.
4. Scale the scene with cover, keeping aspect ratio; crop consistently for base and overlay. Scene edges and lower skyline carry most detail, keeping the central building area quieter.
5. Suppress the old procedural sky/skyline for a selected custom scene to avoid layering two backgrounds. Preserve the original day/night scene as the default option if wanted.
6. Pause these ambient loops when the game is paused or reduced-motion is enabled; use the base alone for reduced motion.

No gameplay code or index.html was edited in this art batch.


## Time-of-day metadata
Every scene in backgrounds.js and backgrounds/catalog.json has one time value:
- morning: petal_garden, sunrise_meadow.
- day: cloud_day, sunny_skyline.
- evening: sunset_lanterns, golden_evening.
- night: starlit_night, aurora, moonlit_rooftops.

Use this field for scene scheduling and weather eligibility. All scene bases remain opaque; all scene motion layers remain transparent except their moving content. The four new scenes follow the same twelve-frame, 4 fps, three-second loop format as the original five. Detail is concentrated at the edges and lower skyline, leaving the central hotel area quiet.

## Weather
weather.js provides seven effects with relative selection weights and time compatibility. See WEATHER.md for filenames, layer order, frame rates and the strict subtle-front-layer rule. The updated preview can play either weather layer over any scene and a sample hotel. Runtime game integration still belongs in the gameplay code; this batch only updates art and art-preview files.
