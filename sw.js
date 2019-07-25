var cacheName = 'v1'
self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open(cacheName).then(function(cache) {
        return cache.addAll(
          [
        
            '/mystyle.css',
            '/script.js',
            '/index.html'
          ]
        );
      })
    );
  });
