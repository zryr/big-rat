# Palette's Journal

This journal records critical UX and accessibility learnings from the `big-rat` project.

## 2024-05-22 - Keyboard Trap on Intro Screen
**Learning:** Full-screen overlays that require interaction to dismiss must be keyboard accessible (tabindex="0" + role="button"), otherwise they become keyboard traps.
**Action:** Always check `onClick` handlers on divs to ensure they have corresponding keyboard event listeners and focus attributes.
