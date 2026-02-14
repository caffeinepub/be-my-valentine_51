# Specification

## Summary
**Goal:** Build a Valentine-themed, single-page interactive “Be My Valentine” experience with 5 sequential sections, ambient animations, images, and background music.

**Planned changes:**
- Implement 5 React (TypeScript) “pages” shown one at a time with a Next button on pages 1–4 and a smooth fade-in transition on page change.
- Convert all user-facing text to English, including rewriting the long Page 5 message fully in English while keeping the romantic intent.
- Add ambient animations with safe creation/cleanup: falling hearts, glitter sparkles, floating roses, floating kiss bubbles, plus a continuously bouncing teddy at bottom-right.
- On Page 5, make the “No” button jump to a random on-screen position when clicked (stays within the viewport).
- Replace the Page 5 “Yes” alert with an in-app confirmation/celebration UI state.
- Add a full-screen loading overlay with a heart and “Loading…” that disappears automatically after ~2 seconds.
- Add looping background music from a bundled local audio file with play/pause and mute/unmute controls, including a prompt if autoplay is blocked.
- Render the four referenced images (photo1.jpg, photo2.jpg, photo3.jpg, yourphoto.jpg) as static assets on the appropriate pages with rounded corners and graceful placeholders if missing.
- Ensure mobile-friendly, responsive layout and that animation layers do not intercept taps/clicks.
- Apply a consistent Valentine visual design using Tailwind (warm pink/red/neutral palette), with consistent typography, card-like containers, and consistent button styling.

**User-visible outcome:** Users see a cute Valentine multi-step page with smooth transitions, romantic English text, background animations, images, and music controls, ending with a playful “Yes/No” interaction where “No” dodges clicks and “Yes” triggers an in-app celebration.
