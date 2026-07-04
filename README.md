# Meranor Website

Public static website for **Meranor** — a software, AI, and technology company building thoughtful tools that help people observe, create, understand, and accomplish more.

Tagline: **Build What Matters.**

## Live Site

This repository is intended for GitHub Pages and should publish from the root of the `main` branch:

```text
https://meranorsoftware.github.io
```

## Project Structure

- `index.html` — homepage
- `styles.css` — shared design tokens and site styling
- `app.js` — minimal progressive enhancement for the mobile menu
- `assets/` — production brand, hero, product, founder, and workshop imagery
- `founder/` — founder page
- `workshop/` — static workshop/article pages
- `docs/` — project notes and handoffs

## Local Preview

No build step is required. Open `index.html` directly in a browser, or run a tiny local server:

```powershell
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/
```

## Technical Notes

- Static HTML, CSS, and vanilla JavaScript only
- No Node, npm, bundler, backend, CMS, analytics, or external API requirement
- GitHub Pages compatible from the repository root
- Primary brand mark: `assets/brand/makers-mark-vector.png`

## Product Notes

Meranor currently presents these active or emerging product efforts honestly:

- FieldKeeper
- Astra AI
- Geomancer
- PatchCube
- CountLens
