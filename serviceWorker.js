let CACHE_NAME = 'sw-cache-v2';
let urlsToCache = [
  '/',
  '/styles/main.css',
  '/scripts/main.js',
  '/images/icons/beach.svg',
  '/images/icons/surfboards.svg',
  '/manifest.json',
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('activate', function(event) {
  console.log('Finally, actived');
})

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
    .then(function(response) {
      if(response) return response;
      return fetch(event.request);
    })
  );
});
