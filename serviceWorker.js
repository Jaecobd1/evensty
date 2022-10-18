const staticEventsy = 'Eventsy-v1';
const assets = ["/", "/index.html", "/css/styles.css", "/js/app.js"];

self.addEventListener("install", (installEvent) => {
    installEvent.waitUntil(
        caches.open(staticEventsy).then((cache) => {
            cache.addAll(assets);
        })
    );
});

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then((res) => {
            return res || fetch(fetchEvent.request)
        })
    );
});