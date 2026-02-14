# Specification

## Summary
**Goal:** Remove all photo rendering and background music from the Valentine experience while keeping the rest of the UI and animations intact.

**Planned changes:**
- Remove background music loading/playing logic and delete/hide any music-related UI prompts/controls across the app.
- Remove all photo/image rendering and any references to the existing photo assets across pages 2–5, adjusting layouts to avoid empty gaps.
- Update `frontend/ASSETS.md` to reflect that photos and background music assets are no longer required.

**User-visible outcome:** The Valentine experience runs with the same navigation and animations, but with no photos displayed and no background music playback or music controls.
