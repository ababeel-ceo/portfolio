# Static assets

Files placed in this `public/` folder are served from the site root
(`/portfolio/...`) and are **not** processed by Vite.

## Add these two files

1. **`resume.pdf`** — your résumé.
   The navbar, Hero, Why-Hire-Me, Resume section, Contact, and Footer all link to
   `/portfolio/resume.pdf` automatically. Just drop the file here as `resume.pdf`
   (exact name, lowercase) and every button works — no code change needed.
   To use a hosted link instead (Google Drive / Dropbox), edit `RESUME_URL` at the
   top of `src/data/profile.js`.

2. **`og-image.png`** — social share image (recommended 1200×630).
   Referenced by the Open Graph / Twitter tags in `index.html` so the link preview
   looks good when shared on LinkedIn, WhatsApp, etc.
