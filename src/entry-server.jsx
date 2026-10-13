// Build-time entry used by scripts/prerender.js - never shipped to the browser.
import { renderToString } from 'react-dom/server';
import App from './App';

export { structuredData, sitemapXml, llmsTxt } from './lib/seo';

export const render = () => renderToString(<App />);
