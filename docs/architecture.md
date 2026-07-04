# Meranor Site Architecture

## Foundation

Meranor Website v0.1 is a pure static local-first website.

- HTML
- CSS
- minimal vanilla JavaScript
- local assets only

## Explicitly Out Of Scope

- Node
- npm
- Astro
- TypeScript
- bundlers
- build steps
- backend services
- external APIs
- deployment setup
- GitHub setup

## Runtime Model

- The site must open directly from [index.html](/C:/Users/jwelch/meranor-site/index.html).
- All links and assets use relative local paths.
- The homepage and workshop pages are hand-authored static HTML files.
- `app.js` is optional enhancement only and is not required for core page content to exist.

## Current Structure

- [index.html](/C:/Users/jwelch/meranor-site/index.html): homepage
- [styles.css](/C:/Users/jwelch/meranor-site/styles.css): shared styles and tokens
- [app.js](/C:/Users/jwelch/meranor-site/app.js): menu toggle and current-year enhancement
- [assets/meranor-mark.svg](/C:/Users/jwelch/meranor-site/assets/meranor-mark.svg): replaceable local logo asset
- [workshop/index.html](/C:/Users/jwelch/meranor-site/workshop/index.html): workshop landing page
- `workshop/*.html`: sample workshop entries

## Content Decisions

- The homepage includes the header, hero, product ecosystem, FieldKeeper spotlight, workshop preview, mission, principles, and footer.
- Workshop content is static HTML in v0.1, but the sample entries remain simple enough to migrate to Markdown later.
- GitHub, social, contact, and legal links remain absent until real destinations exist.

## Maintenance Notes

- Keep dependencies at zero unless a future milestone changes the brief.
- Keep the brand mark replaceable.
- Preserve honest product status language.
- Preserve keyboard focus states, readable contrast, reduced-motion support, and mobile polish.
