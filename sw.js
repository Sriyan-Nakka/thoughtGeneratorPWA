const assets = [
  "./index.html",
  "./script.js",
  "./fonts/kottaone-regular-webfont.woff",
  "./fonts/kottaone-regular-webfont.woff2",
  "./fonts/RobotoSerif-Italic.woff",
  "./fonts/RobotoSerif-Italic.woff2",
  "./thoughts.json",
];
const cacheName = "cacheStaticAssets";

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((cacheRes) => {
      return cacheRes || fetch(e.request);
    })
  );
});

self.addEventListener("activate", (e) => {
  console.log("service worker activated", e);
});
