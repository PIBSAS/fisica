const CACHE_NAME = "revistas-cache-v1";
const urlsToCache = ['./', 'logo_pwa.png', 'favicon.ico', 'site.webmanifest', '00%20Tema_%202013-04%20_%20F%C3%ADsica%201%20%282013%29%20_%20UNM%20-%20Campus%20Virtual_Septiembre.pdf', '00%20Tema_%202013-04%20_%20F%C3%ADsica%201%20%282013%29%20_%20UNM%20-%20Campus%20Virtual_Septiembre.png', '01%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_2%2027-34.pdf', '01%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_2%2027-34.png', '02%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_5%20100-111.pdf', '02%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_5%20100-111.png', '03%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_5%20111-119.pdf', '03%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_5%20111-119.png', '04%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_5%20115-123.pdf', '04%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_5%20115-123.png', '05%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_6%20137-141.pdf', '05%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_6%20137-141.png', '06%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_6%20139-141.pdf', '06%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_6%20139-141.png', '07%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_7%20163-177.pdf', '07%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_7%20163-177.png', '08%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_9%20232-242.pdf', '08%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_9%20232-242.png', '09%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_9%20242-249.pdf', '09%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_9%20242-249.png'];

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