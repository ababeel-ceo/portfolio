# Static assets

Files placed in this `public/` folder are copied verbatim to the site root
(`/...` on https://abdullathepro.online) and are **not** processed by Vite.

## Files that must stay here

1. **`CNAME`** — the GitHub Pages custom domain (`abdullathepro.online`).
   `npm run deploy` publishes only the contents of `dist/`, so if this file is
   not in `public/` the deploy wipes the custom domain off the `gh-pages`
   branch. Do not delete it.

2. **`.nojekyll`** — tells GitHub Pages to serve the build as-is instead of
   running it through Jekyll.

3. **`Abdulla.pdf`** — the résumé.
   The navbar, Hero, Why-Hire-Me, Resume section, Contact, and Footer all link
   to `/Abdulla.pdf` automatically via `RESUME_URL` in `src/data/profile.js`.
   To use a hosted link instead (Google Drive / Dropbox), edit `RESUME_URL` at
   the top of that file.

## Optional

- **`og-image.png`** — social share image (recommended 1200×630).
  Referenced by the Open Graph / Twitter tags in `index.html` so the link
  preview looks good when shared on LinkedIn, WhatsApp, etc.
