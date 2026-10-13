# Static assets

Files placed in this `public/` folder are copied verbatim to the site root
(`/...` on https://abdullathepro.online) and are **not** processed by Vite.

## Files that must stay here

1. **`CNAME`** - the GitHub Pages custom domain (`abdullathepro.online`).
   `npm run deploy` publishes only the contents of `dist/`, so if this file is
   not in `public/` the deploy wipes the custom domain off the `gh-pages`
   branch. Do not delete it.

2. **`.nojekyll`** - tells GitHub Pages to serve the build as-is instead of
   running it through Jekyll.

3. **`Abdulla.pdf`** - the résumé.
   The navbar, Hero, Why-Hire-Me, Resume section, Contact, and Footer all link
   to `/Abdulla.pdf` automatically via `RESUME_URL` in `src/data/profile.js`.
   To use a hosted link instead (Google Drive / Dropbox), edit `RESUME_URL` at
   the top of that file.

## SEO & sharing

- **`og-image.png`** - 1200×630 link-preview card for LinkedIn, WhatsApp, X,
  etc., referenced by the Open Graph / Twitter tags in `index.html`. Its source
  is `scripts/og-image.html`; the regenerate command is at the top of that file.
- **`robots.txt`** - lets every crawler in and points to the sitemap.
- **`404.html`** - GitHub Pages serves this (with a real 404 status) for any
  URL that doesn't exist; it's `noindex` and links back to the portfolio.
- **`favicon.svg`**, **`favicon.ico`**, **`apple-touch-icon.png`**,
  **`icon-192.png`**, **`icon-512.png`**, **`site.webmanifest`** - browser,
  search-result, and home-screen icons.

Not in this folder: `sitemap.xml`, `llms.txt`, the JSON-LD structured data,
and the prerendered page HTML are generated from `src/data/profile.js` by
`npm run build` (see `scripts/prerender.js`), so they always match the site.
