# Meranor Website v0.5 — Real Image Asset Wiring

## Summary
Wires the locked real image assets into the homepage while preserving the static local-first architecture.

## Asset paths expected
- assets/products/fieldkeeper-featured-preview.png
- assets/products/fieldkeeper-card-preview.png
- assets/products/astra-card-preview.png
- assets/products/geomancer-card-preview.png
- assets/products/patchcube-card-preview.png
- assets/products/countlens-card-preview.png
- assets/workshop/workshop-naturalist-guides.png
- assets/workshop/workshop-local-first-ai.png
- assets/workshop/workshop-building-slow.png

## Changes
- Product ecosystem cards now use real preview images plus supporting vector badges.
- FieldKeeper spotlight now uses the locked featured preview image.
- Workshop cards now use the locked editorial thumbnail assets.
- CSS adds real image treatment, hover/focus polish, and responsive behavior.

## Architecture
Still local-first static HTML/CSS/JS. No Node, npm, bundler, GitHub, deployment, or build step required.
