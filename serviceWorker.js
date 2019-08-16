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

self.addEventListener('push', function(event) {
  console.log('push notification message');
  const title = 'Message is comming';
  const body = 'Recevied a push message';
  const icon = '/images/icons/surfboards.svg';
  const tag = 'push-notification-tag';
  event.waitUntil(
    self.registration.showNotification(title, {
      body: body,
      icon: icon,
      tag: tag,
      actions: [
        { action: "yes", title: "Yes", icon: "/images/icons/high-wave.svg" },
        { action: "no", title: "No", icon: "/images/icons/waves.svg" }
      ]
    })
  );
});

self.addEventListener('notificationclick', function(event) {
  console.log('Notification tag');
  event.notification.close();

  event.waitUntil(clients.matchAll({
    type: 'window'
  }).then(function(clients) {
    clients.forEach(function(client) {
      console.log(client.url);
      const url = new URL(client.url)
      if(url.pathname === '/' && 'focus' in client) {
        console.log('match focus');
        return client.focus();
      }
    });
    console.log('is open window', clients.openWindow);
    if(clients.openWindow) {
      clients.openWindow('/');
    }
  }));
});
