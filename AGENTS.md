# MERANOR Website Agent Notes

This repository is for the public Meranor website only.

## Locked Identity

- Company name: `Meranor`
- Tagline: `Build What Matters.`
- Core statement: `We create thoughtful software that helps people observe, create, and understand more.`
- Mission: `We believe meaningful technology should empower curiosity, not distract from it.`

## Product Boundaries

- Meranor is a parent software, AI, and technology company.
- Meranor is not a game studio.
- Do not present Little Black Goat Games projects as Meranor products.
- Treat product availability honestly:
  - `FieldKeeper`: first flagship, still in development
  - `Astra AI`: in development
  - `Geomancer`: in development
  - `PatchCube`: early concept or development
  - `CountLens`: internal or in-development software

## Visual Rules

- Use the `references` folder as the visual source of truth.
- `references/meranor-homepage-north-star-d.png` is the canonical homepage composition reference.
- `references/meranor-brand-card-v1.png` is the canonical brand reference for the maker's mark, palette, spacing, and tone.
- Preserve the charcoal, stone, graphite, and warm brass palette.
- Avoid bright AI blue, neon purple, cyberpunk, crypto aesthetics, generic stock imagery, and visual clutter.
- Do not use the brand-card screenshot itself as the production logo.
- Keep the `assets/brand/meranor-makers-mark.png` asset replaceable because the current SVG is provisional.

## Technical Rules

- Stack: static HTML + explicit CSS with design tokens + minimal vanilla JavaScript only when needed.
- The site must open locally by double-clicking `index.html`.
- Prefer static pages and minimal client-side JavaScript.
- Keep dependencies small and local to the repo.
- No backend, CMS, analytics, authentication, or external APIs in this milestone.
- No Node, npm, Astro, TypeScript, bundler, server requirement, or build step in this milestone.
- Keep shared product content simple, local, and easy to update.
- Architect workshop previews so Markdown content can become the long-term source.

## Delivery Rules

- Homepage v0.1 includes the header, hero, product ecosystem, FieldKeeper spotlight, workshop preview, mission, principles, and footer.
- No dead links, fake testimonials, fake metrics, fake launch claims, fake legal pages, or fake contact details.
- Hide GitHub or contact links until real destinations are supplied.
- Prioritize keyboard access, visible focus states, readable contrast, reduced-motion support, and mobile-first polish.
- Do not deploy from this repository during the foundation milestone.

