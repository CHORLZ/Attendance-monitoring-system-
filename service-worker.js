self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("attendance-cache").then(cache => {
            return cache.addAll([
                "index.html",
                "manifest.json"
            ]);
        })
    );
});