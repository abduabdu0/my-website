self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("love-app").then(cache => {
      return cache.addAll([
        "index.html",
        "icon.png",
        "photo1.jpg",
        "photo2.jpg",
        "music.mp3"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
        navigator.vibrate && navigator.vibrate(50);
    });
});

self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("app").then(cache => {
            return cache.addAll([
                "/",
                "/index.html",
                "/index1.html",
                "/ost.html",
                "/style.css",
                "/script.js",
                "/icon.png"
            ]);
        })
    );
});