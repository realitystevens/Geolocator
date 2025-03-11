const CACHE_NAME = 'geolocator-cache-v1';

const urlsToCache = [
    '/',
    '/static/style.css',
    '/static/form.js',
    '/static/changeTheme.js',
    '/static/getCurrentLocation.js',
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap',
    'https://res.cloudinary.com/realitystevens/image/upload/v1705590002/geolocator_og_image.png',
    'https://res.cloudinary.com/realitystevens/image/upload/v1702429271/geolocator_project_favicon.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});

self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});