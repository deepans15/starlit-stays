# Room emergencies and lost property
All 27 SVGs are original rounded vector art, self-contained and under 60 KB each. Manifest keys omit .svg. Backgrounds are transparent; only the specified full-room tints cover the canvas. No scripts, SVG animation elements, text, images or external links are used.

## Status icons (48 x 48)
- ui/issue_hot.svg: flushed warm face, heat waves and a blue sweat drop. Display at 22 px inside a white circle.
- ui/issue_cold.svg: frosted blue heater with a snowflake. Display at 22 px.
- ui/issue_leak.svg: elbow pipe with a blue droplet. Display at 22 px.
- ui/issue_dark.svg: unlit bulb crossed with a dark slash. Display at 22 px.

## Room overlays (320 x 168)
For each issue hot, cold, leak and dark, ui/issue_<type>_overlay_1.svg through _4.svg form a four-frame 6 fps loop (2/3 second). Stretch to the displayed room rectangle; do not preserve aspect ratio. These are environmental effects, not guest-room art. No meaningful content depends on an edge position.
- Hot: constant 12% orange tint and gently shifting low-opacity heat curves.
- Cold: constant 13% blue tint, decorative frost sprigs near corners, and three softly drifting snowflakes. The frost is deliberately faint and not needed to identify the issue.
- Leak: two staggered drops fade through their wrap, with a softly expanding/contracting floor puddle. Both stay near the centre.
- Dark: constant 45% navy tint with a faint warm radial glow. Glow opacity varies only from 6.7% to 8.3%, with no large brightness changes.
The phase samples are periodic, including frame 4 back to frame 1. Furniture stays visible through hot, cold and leak; dark deliberately feels unlit.

## Repair person (56 x 96)
- chars/handyman.svg: friendly right-facing repair person in a blue cap and mint work shirt, tan tool belt, work trousers and boots; holding a wrench.
- chars/handyman_fix_1.svg through _4.svg: wrench turn and forearm loop at 6 fps. Head, cap, torso, belt and boot anchors remain fixed. A small gold bolt accent suggests the repair without a flashing spark.
All five files have matching dimensions and fixed foot baseline at y=96. Display at 28 x 48 game pixels.

## Lost property and tips
- ui/suitcase.svg: 40 x 40 mint travel case, handle, wheels and cream luggage tag. Designed for 20 px.
- ui/tips.svg: 48 x 48 mint glass tip jar with large gold coins. Designed for 18 px, without lettering.

## Preview and integration
preview.html lists all 27 assets, plays the four room overlays over the furnished gym at 6 fps, plays the repair loop, and shows the six UI icons at their actual game sizes. Existing previews remain available. Pause and display-scale controls affect the new animation players.
Only art files were edited. See CODE_NOTES.md for the renderer lookup keys and tip-chip integration handoff.
