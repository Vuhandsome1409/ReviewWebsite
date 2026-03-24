const CACHE_NAME = 'ninja-ai-v1';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.svg',
];

// Skip service worker in development
if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
  console.log('Service Worker disabled in development');
} else {
  // Install event - cache static assets
  self.addEventListener('install', (event) => {
    console.log('Service Worker installing...');
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then((cache) => {
          console.log('Caching static assets');
          return cache.addAll(STATIC_ASSETS);
        })
        .then(() => {
          console.log('Service Worker installed successfully');
          return self.skipWaiting();
        })
        .catch((error) => {
          console.error('Cache install failed:', error);
        })
    );
  });

  // Activate event - clean up old caches
  self.addEventListener('activate', (event) => {
    console.log('Service Worker activating...');
    event.waitUntil(
      caches.keys()
        .then((cacheNames) => {
          return Promise.all(
            cacheNames.map((cacheName) => {
              if (cacheName !== CACHE_NAME) {
                console.log('Deleting old cache:', cacheName);
                return caches.delete(cacheName);
              }
            })
          );
        })
        .then(() => {
          console.log('Service Worker activated successfully');
          return self.clients.claim();
        })
    );
  });

  // Fetch event - serve from cache, fallback to network
  self.addEventListener('fetch', (event) => {
    // Only handle GET requests
    if (event.request.method !== 'GET') {
      return;
    }

    // Skip cross-origin requests
    if (!event.request.url.startsWith(self.location.origin)) {
      return;
    }

    // Skip WebSocket and HMR requests
    if (event.request.url.includes('ws://') || 
        event.request.url.includes('/@vite/') ||
        event.request.url.includes('?token=')) {
      return;
    }

    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          // Return cached version or fetch from network
          return response || fetch(event.request)
            .then((fetchResponse) => {
              // Don't cache non-successful responses
              if (!fetchResponse || fetchResponse.status !== 200 || fetchResponse.type !== 'basic') {
                return fetchResponse;
              }

              // Clone the response
              const responseToCache = fetchResponse.clone();

              // Cache the response for future use (only for static assets)
              if (event.request.url.match(/\.(js|css|png|jpg|jpeg|gif|svg|woff|woff2)$/)) {
                caches.open(CACHE_NAME)
                  .then((cache) => {
                    cache.put(event.request, responseToCache);
                  })
                  .catch((error) => {
                    console.warn('Failed to cache resource:', error);
                  });
              }

              return fetchResponse;
            })
            .catch((error) => {
              console.warn('Fetch failed:', error);
              // Return offline page for navigation requests
              if (event.request.mode === 'navigate') {
                return caches.match('/');
              }
            });
        })
    );
  });
}