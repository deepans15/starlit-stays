# Extra guests

Six original guest designs, each with a 56 x 96 still, four 56 x 96 walk frames at 8 fps, and one 112 x 64 bed-aligned sleep overlay.

- guest_7: Beret Photographer
- guest_8: Mint Scarf Traveller
- guest_9: Curly Knitwear Guest
- guest_10: Silver-Haired Grandfather
- guest_11: Ponytail Sports Guest
- guest_12: Bob-Haired Creative Guest

All 36 SVGs are registered in manifest.js and shown by art/preview.html. Existing characters are preserved.

Game integration: index.html currently declares GUEST_SKINS = 6. Claude should raise that limit to 12 (or derive it from the registered base guest assets) so guest_7 through guest_12 can spawn. Rendering and sleep keys already use the guest number. No gameplay code was changed.
