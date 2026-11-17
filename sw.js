/* Starlit Stays service worker.
   - The page (index.html) is always fetched from the network first, so a new version goes live the moment it is pushed;
     the last copy is kept only as an offline fallback.
   - Art files carry ?v=<build> in their address, so each version is cached once and never goes stale.
   The Android app loads the live website, so this is also what makes the app work offline after the first launch. */
const VER = new URL(self.location).searchParams.get('v') || '0';
const ASSETS = 'starlit-assets-' + VER, DOCS = 'starlit-docs';

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil((async () => {
  for (const k of await caches.keys()) if (k.startsWith('starlit-assets-') && k !== ASSETS) await caches.delete(k);   // drop older builds' art
  await self.clients.claim();
})()));

self.addEventListener('fetch', e => {
  const r = e.request, u = new URL(r.url);
  if (r.method !== 'GET' || u.origin !== self.location.origin) return;   // Firebase, fonts etc. go straight to the network
  const isPage = r.mode === 'navigate' || u.pathname.endsWith('/') || u.pathname.endsWith('.html');
  if (isPage) {
    e.respondWith(fetch(r).then(res => { if (res.ok) { const c = res.clone(); caches.open(DOCS).then(x => x.put(r, c)); } return res; })
      .catch(() => caches.match(r, { ignoreSearch: true }).then(m => m || caches.match(u.pathname, { ignoreSearch: true }))));
    return;
  }
  if (u.searchParams.has('v')) {
    e.respondWith(caches.open(ASSETS).then(async c => {
      const hit = await c.match(r); if (hit) return hit;
      const res = await fetch(r); if (res.ok) c.put(r, res.clone()); return res;
    }));
  }
});
