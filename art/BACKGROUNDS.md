# Animated hotel backgrounds

Five original 16:9 scenes, each 960 x 540 pixels:
- cloud_day: Drifting Cloud Day, pale-blue sky, moving cream clouds and mint hills.
- sunset_lanterns: Sunset Lanterns, peach dusk, distant town and softly floating lanterns.
- starlit_night: Starlit Night, quiet crescent moon and twinkling stars.
- aurora: Quiet Aurora, snowy distant mountains and gently shifting translucent light ribbons.
- petal_garden: Petal Garden, flowering branches at the edges and falling petals.

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
