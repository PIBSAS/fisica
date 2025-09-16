const CACHE_NAME = "revistas-cache-v1";
const urlsToCache = ['/f/', '/static/logo.webp', '/static/favicon.ico', '/static/site.webmanifest', '/static/service-worker.js', '/f/./00%20Tema_%202013-04%20_%20F%C3%ADsica%201%20%282013%29%20_%20UNM%20-%20Campus%20Virtual_Septiembre.pdf', '/f/./00%20Tema_%202013-04%20_%20F%C3%ADsica%201%20%282013%29%20_%20UNM%20-%20Campus%20Virtual_Septiembre.webp', '/f/./01%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_2%2027-34.pdf', '/f/./01%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_2%2027-34.webp', '/f/./02%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_5%20100-111.pdf', '/f/./02%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_5%20100-111.webp', '/f/./03%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_5%20111-119.pdf', '/f/./03%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_5%20111-119.webp', '/f/./04%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_5%20115-123.pdf', '/f/./04%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_5%20115-123.webp', '/f/./05%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_6%20137-141.pdf', '/f/./05%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_6%20137-141.webp', '/f/./06%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_6%20139-141.pdf', '/f/./06%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_6%20139-141.webp', '/f/./07%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_7%20163-177.pdf', '/f/./07%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_7%20163-177.webp', '/f/./08%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_9%20232-242.pdf', '/f/./08%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_9%20232-242.webp', '/f/./09%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_9%20242-249.pdf', '/f/./09%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_9%20242-249.webp'];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
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

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).catch(() => {
        return new Response("No hay conexión y el recurso no está en caché.", {
          headers: { "Content-Type": "text/plain" }
        });
      });
    })
  );
});