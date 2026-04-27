/**
 * server.mjs — Produkční vstupní bod s gzip kompresí
 * Spuštění: node server.mjs
 * Nebo:    PORT=4321 HOST=0.0.0.0 node server.mjs
 *
 * Dynamic import for entry.mjs runs AFTER env var is set,
 * preventing the adapter from auto-starting its own server.
 */

// Must be set before entry.mjs is evaluated (static imports are hoisted, so use dynamic import below)
process.env.ASTRO_NODE_AUTOSTART = 'disabled';

import compression from 'compression';
import http from 'node:http';

const PORT = parseInt(process.env.PORT ?? '4321', 10);
const HOST = process.env.HOST ?? '0.0.0.0';

// Dynamic import — runs after process.env is set above
const { handler: astroHandler } = await import('./dist/server/entry.mjs');

// Komprese: gzip pro text/* a application/javascript (≥1 KB)
const compress = compression({
  level: 6,           // zlib level 6 — dobrý poměr rychlost/komprese
  threshold: 1024,    // komprimovat pouze soubory > 1 KB
  filter: (req, res) => {
    if (req.headers['x-no-compression']) return false;
    return compression.filter(req, res);
  },
});

// Wrapper: compression middleware → astro handler
function handler(req, res) {
  compress(req, res, () => astroHandler(req, res));
}

const server = http.createServer(handler);
server.listen(PORT, HOST, () => {
  console.log(`Kronteq server běží na http://${HOST}:${PORT}`);
});
