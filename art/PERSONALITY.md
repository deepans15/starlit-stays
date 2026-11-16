# Personality, working lights and furniture movement

## Scope
This is the first three-part personality pack the user approved: guest reactions, working lights/window views, and small furniture movements. All game assets and metadata changes are inside art/. No edits to index.html. Existing room/background/character base files, manifest entries, dimensions and catalog values are preserved. The treehouse branch correction remains intact.

## Guest reactions: 416 new SVGs
Four short eight-frame reactions for all 12 guests and the inspector,56 x 96,feet anchor {28,96}:
- chars/<identity>_react_admire_1..8: look toward a furnishing, hands to chest and a small clap, then relax.4 fps, one shot.
- chars/<identity>_react_warm_hands_1..8: hands extended toward a lit hearth, small palm movements and a contented expression.3 fps, loop while warming.
- chars/<identity>_react_photo_1..8: lift a camera, hold the viewfinder, tiny lens glint and lower it.5 fps, one shot. No full-screen flash.
- chars/<identity>_react_window_peek_1..8: lean, shade the eyes, point toward the view and relax.3 fps, one shot.
Identity heads/hair, skin tones and clothing palettes are retained. Reaction poses leave travel luggage aside while hands are occupied. reactions.js supplies STARLIT_REACTIONS with anchors, frame keys, fps, play mode and target tags. Existing item metadata gains guestReactions eligibility lists for beds, windows and the fireplace. These lists do not force a reaction every visit.

## Furniture motion: 40 frame SVGs
All frames replace the static item image, rather than overlaying a second copy. Existing source sizes remain unchanged.
- hammock_bed_sway_1..8:128 x 72,3 fps; fixed posts, cloth/pillow/blanket moving gently. Eight sleepOffsets let the sleeping head move with the mattress.
- ceiling_fan_spin_1..8:72 x 32,8 fps; fixed mount and hub, three rotating blades in shallow perspective.
- fireplace_burn_1..8:88 x 88,4 fps; stable brick/mantel with gently varying flame shapes.
- NEW rocking_chair.svg and rocking_chair_rock_1..8:72 x 80,3 fps; curved runners with fixed floor contact. Floor/seating,360 coins,6 decor,level 4.
- NEW linen_curtains.svg and linen_curtains_flutter_1..8:96 x 104,3 fps; fixed wall rod and gently moving folds/hem. Wall/wall,180 coins,4 decor,level 2.
decor_animations.js supplies STARLIT_DECOR_ANIMATIONS. Activation hints are occupied_or_settling, enabled, lit or breeze. Existing items gain animation frame references; only the two new furniture pieces add purchase entries. No existing costs, levels, climate fields, bed layouts or placement properties were changed.

## Working lights: 9 profiles
lamp, gold_lamp, pink_lamp, halloween_pumpkin_lamp, chandelier, gold_chandelier, brass_cabin_lantern, industrial_pendant and fireplace each have an exact-size decor/<id>_off.svg plus eight transparent effects/light_<id>_1..8.svg halos at4 fps. This adds 81 SVGs. Halos have a soft radial falloff, approximately 17% centre alpha with only 0.4 percentage-point breathing variation. They do not flash. Original on/base filenames remain intact. Large halo canvases deliberately extend beyond their item and must be clipped to the room.
lighting.js supplies STARLIT_LIGHTING: source dimensions, local emitter point, halo dimensions/anchor, on/off keys, halo frames, activation state, optional 18% dusk/night room tint and 1200 ms transition duration. Auto times are evening/night, with actual item switch/lit state taking precedence. Fireplace can still be lit in daytime. The profiles for built-in lamp/chandelier work by item ID without overriding their original catalog prices.

## Window views: 8 new SVGs
Seven windows gain _night variants with dark blue glass, small moon/stars and preserved frames. window_city_view keeps its existing night key and gains _day. Existing source dimensions remain unchanged. Every window item gains dayNight references; lighting.js also lists all eight day/night pairs. These are appearance variants of the same purchased item, not extra purchasable windows.

## Preview
preview.html loads the three new metadata files and adds:
- Four reaction scenes,13-identity selector and replay button. One-shot reactions pause before repeating in the preview; warm_hands cycles continuously.
- Day/Dusk/Night lighting room with nine selectable lights, an animated rocker and cross-fading window view. Halo, on/off sprite and room tint fade gradually.
- Five standalone furniture-motion players with individual frame galleries.
Existing room studios, animation clocks, pause/scale controls and asset galleries remain. See CODE_NOTES.md for the game-code handoff. This pack creates no guest scheduler, temperature effects, automatic rewards or gameplay audio.

## Validation for this personality pack
All 2551 SVGs passed XML, exact dimensions/viewBox, self-contained markup, manifest-path and file-size checks. All original 2004 keys, source dimensions and catalog values were retained. Largest SVG: 9508 bytes. New content totals 547 SVG keys, 416 reaction frames, 40 furniture-motion frames, 72 halos, 9 off variants, 8 window views and 2 new item base sprites. All 416 reaction sprites were rendered and checked for side clipping, with no clipping found. Preview initialization checked 2551 assets with zero failures; 351 guest/light/time combinations passed, with 4 reaction scenes, 5 motion players and 9 light selections. Existing animation/pause/scale controls remain intact. Browser gameplay was not verified.
