# Meranor Website v0.7 — Launch Polish

## Summary

This pass prepares the static local-first Meranor site for GitHub setup by tightening visual polish and cleaning launch-facing details without changing the architecture.

## Changes

- Preserved the static local-first workflow: no Node, npm, build step, backend, or deployment.
- Kept the approved Meranor maker’s mark image as the active brand mark.
- Fixed mojibake/encoding issues in founder and homepage text.
- Fixed nested page asset paths so workshop and founder pages resolve the Meranor mark correctly.
- Added a `.gitignore` for static-site cleanup before GitHub.
- Added final CSS polish for header, hero, card focus states, product-card consistency, footer rhythm, mobile typography, and launch readiness.
- Kept nonfunctional external links out of the homepage.

## Recommended local check

Open `index.html` directly in a browser, then check:

- Homepage hero
- Product ecosystem row
- FieldKeeper feature panel
- Workshop section
- Mission/founder link
- Footer
- `founder/index.html`
- `workshop/index.html`

## GitHub readiness

The site is ready for a first local Git commit once Josh approves the visual pass.
