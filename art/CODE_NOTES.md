# Art integration notes

## Emergency / lost-and-found art pack
No edits to index.html were made for this batch. Existing issue/handyman hooks already request the supplied names.
- Status key: ui/issue_<type> (hot, cold, leak, dark), displayed 22 x 22 in the current white circle.
- Overlay key: ui/issue_<type>_overlay_<1..4>, frame = 1 + floor(animationTime * 6) % 4. Stretch to the full room rectangle after furniture; retain the file alpha. No additional strong tint is needed.
- Repair: chars/handyman as the standing fallback; chars/handyman_fix_<1..4> at 6 fps, 28 x 48 display. Use the same feet anchor across frames.
- Lost property: ui/suitcase at 20 x 20.
- Tip chip: ui/tips at 18 x 18. The existing DOM tip button/collectAllTips label still uses an emoji; Claude can replace only that icon with an image resolved from the manifest. Keep the existing count, amount and click handler.
- Use a wrapping game clock so animation pauses with the game. All new SVGs are registered; ensure cache invalidation follows the current game asset version convention.
