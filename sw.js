// Service worker: deixa o app abrir mesmo sem internet (a IA, as contas e os números ao vivo continuam precisando de internet)
const CACHE = 'hollow-v15';
const SHELL = ['./', './index.html', './config.js', './games-data.js', './manifest.webmanifest', './icons/icon.ico?v=6',
  './icons/icon-16.png?v=6', './icons/icon-32.png?v=6', './icons/icon-48.png?v=6', './icons/icon-96.png?v=6', './icons/icon-192.png?v=6', './icons/icon-512.png?v=6'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  // só arquivos do próprio app; chamadas de IA, fontes e CDNs vão direto para a rede
  if (e.request.method !== 'GET' || url.origin !== self.location.origin) return;
  // rede primeiro (pega atualizações), cache se estiver offline
  e.respondWith(
    fetch(e.request, { cache: 'no-cache' })
      .then(res => {
        // só guarda respostas que deram certo (um erro 404 não pode substituir o arquivo bom do cache)
        if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); }
        return res;
      })
      // sem internet: o arquivo do cache; se for a página e ela não estiver lá, o index.html
      .catch(() => caches.match(e.request).then(r => r || (e.request.mode === 'navigate' ? caches.match('./index.html') : Response.error())))
  );
});
