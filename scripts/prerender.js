// ============================================================================
//  Final step of `npm run build`. Renders the app into dist/index.html so
//  crawlers and link previews get the full page without running JavaScript,
//  then writes the SEO files derived from src/data/profile.js.
// ============================================================================
import { readFile, writeFile, rm } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const ssrDir = fileURLToPath(new URL('../dist-ssr/', import.meta.url));

const { render, structuredData, sitemapXml, llmsTxt } = await import(
  pathToFileURL(`${ssrDir}entry-server.js`).href
);

const buildDate = new Date().toISOString().slice(0, 10);
// Escape "<" so no string in the data can close the script tag early.
const jsonLd = JSON.stringify(structuredData(buildDate)).replace(/</g, '\\u003c');

let html = await readFile(`${dist}index.html`, 'utf8');
for (const [marker, content] of [
  ['<!--app-head-->', `<script type="application/ld+json">${jsonLd}</script>`],
  ['<!--app-html-->', render()],
]) {
  if (!html.includes(marker)) throw new Error(`prerender: ${marker} missing from index.html`);
  html = html.replace(marker, () => content);
}

// Inline the stylesheet: it's a single page, so a separate CSS request only
// delays first paint (most noticeable on mobile networks).
const cssLink = html.match(/<link rel="stylesheet" crossorigin href="\/(assets\/[^"]+\.css)">/);
if (!cssLink) throw new Error('prerender: stylesheet link not found in index.html');
const css = await readFile(`${dist}${cssLink[1]}`, 'utf8');
html = html.replace(cssLink[0], () => `<style>${css}</style>`);

await Promise.all([
  writeFile(`${dist}index.html`, html),
  writeFile(`${dist}sitemap.xml`, sitemapXml(buildDate)),
  writeFile(`${dist}llms.txt`, llmsTxt()),
]);
await rm(ssrDir, { recursive: true, force: true });

console.log('prerender: wrote index.html, sitemap.xml, llms.txt');
