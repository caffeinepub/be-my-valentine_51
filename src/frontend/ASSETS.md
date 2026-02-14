# Assets Guide

This Valentine's app is a text-based romantic experience with ambient animations (hearts, sparkles, roses, kisses, and a bouncing teddy bear).

## No Assets Required

The app no longer uses photos or background music. All visual elements are generated through CSS animations and emoji/icon-based decorations.

## Customization

If you want to customize the experience, you can:

1. **Edit the messages** in `frontend/src/features/valentine/ValentinePages.tsx`
   - Modify the text on Pages 1-5 to personalize your message
   - Change emojis and romantic copy to match your style

2. **Adjust the color scheme** in `frontend/src/index.css`
   - Customize the Valentine color palette (pinks, reds, and accent colors)
   - Modify the OKLCH color values for light and dark modes

3. **Tweak animations** in `frontend/src/index.css` and `frontend/src/features/valentine/hooks/useAmbientAnimations.ts`
   - Adjust animation speeds, frequencies, and styles
   - Add or remove ambient effects (hearts, sparkles, roses, etc.)

The app is fully self-contained and requires no external assets to function.
