const CACHE_NAME = "revistas-cache-v1";
const urlsToCache = ['./', 'static/logo.webp', 'static/logo_pwa.png', 'static/logo_pwa-192.png', 'static/logo_pwa-512.png', 'static/logo_pwa-1024.png', 'static/favicon.ico', 'static/site.webmanifest', 'static/pdfjs/web/viewer.html', 'static/pdfjs/build/pdf.js', 'static/pdfjs/build/pdf.worker.js', '00%20Tema_%202013-04%20_%20F%C3%ADsica%201%20%282013%29%20_%20UNM%20-%20Campus%20Virtual_Septiembre.pdf', 'static/00%20Tema_%202013-04%20_%20F%C3%ADsica%201%20%282013%29%20_%20UNM%20-%20Campus%20Virtual_Septiembre.webp', '01%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_2%2027-34.pdf', 'static/01%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_2%2027-34.webp', '02%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_5%20100-111.pdf', 'static/02%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_5%20100-111.webp', '03%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_5%20111-119.pdf', 'static/03%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_5%20111-119.webp', '04%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_5%20115-123.pdf', 'static/04%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_5%20115-123.webp', '05%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_6%20137-141.pdf', 'static/05%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_6%20137-141.webp', '06%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_6%20139-141.pdf', 'static/06%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_6%20139-141.webp', '07%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_7%20163-177.pdf', 'static/07%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_7%20163-177.webp', '08%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_9%20232-242.pdf', 'static/08%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_9%20232-242.webp', '09%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_9%20242-249.pdf', 'static/09%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_9%20242-249.webp'];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(key => {
        if (key !== CACHE_NAME) {
          return caches.delete(key);
        }
      }))
    )
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response =>
      response || fetch(event.request).catch(() =>
        new Response("No hay conexión y el recurso no está en caché.", {
          headers: { "Content-Type": "text/plain" }
        })
      )
    )
  );
});