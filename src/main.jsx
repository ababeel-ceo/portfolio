import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Self-hosted variable fonts: same origin as the page, so they never block first paint.
import '@fontsource-variable/inter';
import '@fontsource-variable/sora';
import '@fontsource-variable/jetbrains-mono';
import './index.css';

const container = document.getElementById('root');
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Production builds ship prerendered markup (scripts/prerender.js) - attach to
// it instead of re-rendering. The dev server serves an empty root.
if (container.firstElementChild) {
  ReactDOM.hydrateRoot(container, app);
} else {
  ReactDOM.createRoot(container).render(app);
}
