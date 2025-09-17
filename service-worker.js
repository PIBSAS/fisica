const CACHE_NAME = "revistas-cache-v1";
const urlsToCache = ['./', 'static/logo.webp', 'static/logo_pwa.png', 'static/logo_pwa-192.png', 'static/logo_pwa-512.png', 'static/logo_pwa-1024.png', 'static/favicon.ico', 'static/site.webmanifest', 'static/pdfjs/web/viewer.html', 'static/pdfjs/build/pdf.mjs', 'static/pdfjs/build/pdf.worker.mjs', '00%20Tema_%202013-04%20_%20F%C3%ADsica%201%20%282013%29%20_%20UNM%20-%20Campus%20Virtual_Septiembre.pdf', 'static/00%20Tema_%202013-04%20_%20F%C3%ADsica%201%20%282013%29%20_%20UNM%20-%20Campus%20Virtual_Septiembre.webp', '01%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_2%2027-34.pdf', 'static/01%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_2%2027-34.webp', '02%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_5%20100-111.pdf', 'static/02%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_5%20100-111.webp', '03%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_5%20111-119.pdf', 'static/03%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_5%20111-119.webp', '04%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_5%20115-123.pdf', 'static/04%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_5%20115-123.webp', '05%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_6%20137-141.pdf', 'static/05%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_6%20137-141.webp', '06%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_6%20139-141.pdf', 'static/06%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_6%20139-141.webp', '07%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_7%20163-177.pdf', 'static/07%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_7%20163-177.webp', '08%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_9%20232-242.pdf', 'static/08%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_9%20232-242.webp', '09%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_9%20242-249.pdf', 'static/09%20Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Vol%201%20Cap_9%20242-249.webp', 'static/apuntes/1_Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Cap_2%2027-34.pdf', 'static/1_Leer%20F%C3%ADsica%20para%20Ciencias%20e%20Ingenier%C3%ADa%20Cap_2%2027-34.webp', 'static/apuntes/Apunte%2001%20Cinem%C3%A1tica%20del%20punto%20MRU.pdf', 'static/Apunte%2001%20Cinem%C3%A1tica%20del%20punto%20MRU.webp', 'static/apuntes/Apunte%2002%20Cinem%C3%A1tica%20del%20Punto%20MRUV.pdf', 'static/Apunte%2002%20Cinem%C3%A1tica%20del%20Punto%20MRUV.webp', 'static/apuntes/Apunte%2003%20Cinem%C3%A1tica%20del%20Punto%20MRUV%20Casos%20Particulares.pdf', 'static/Apunte%2003%20Cinem%C3%A1tica%20del%20Punto%20MRUV%20Casos%20Particulares.webp', 'static/apuntes/Apunte%2004%20Cinem%C3%A1tica%20Tiro%20Obl%C3%ADcuo.pdf', 'static/Apunte%2004%20Cinem%C3%A1tica%20Tiro%20Obl%C3%ADcuo.webp', 'static/apuntes/Apunte%2005%20Din%C3%A1mica%20Parte%201%20Leyes%20de%20Newton.pdf', 'static/Apunte%2005%20Din%C3%A1mica%20Parte%201%20Leyes%20de%20Newton.webp', 'static/apuntes/Apunte%2006%20Din%C3%A1mica%20Parte%202%20Fuerzas%20de%20Rozamiento.pdf', 'static/Apunte%2006%20Din%C3%A1mica%20Parte%202%20Fuerzas%20de%20Rozamiento.webp', 'static/apuntes/Apunte%2007%20Din%C3%A1mica%20Parte%203%20Fuerzas%20El%C3%A1sticas.pdf', 'static/Apunte%2007%20Din%C3%A1mica%20Parte%203%20Fuerzas%20El%C3%A1sticas.webp', 'static/apuntes/Apunte%2008%20Din%C3%A1mica%20Parte%204%20Movimiento%20Circular%20Uniforme%20MCU.pdf', 'static/Apunte%2008%20Din%C3%A1mica%20Parte%204%20Movimiento%20Circular%20Uniforme%20MCU.webp', 'static/apuntes/Apunte%2009%20Energ%C3%ADa%20y%20Trabajo%20de%20Fuerzas%20Conservativas%20y%20No%20Conservativas.pdf', 'static/Apunte%2009%20Energ%C3%ADa%20y%20Trabajo%20de%20Fuerzas%20Conservativas%20y%20No%20Conservativas.webp', 'static/apuntes/Apunte%2012%20Potencia.pdf', 'static/Apunte%2012%20Potencia.webp', 'static/apuntes/Apunte%2013%20Impulso%20y%20Cantidad%20de%20Movimiento%20Colisiones%20Parte%201.pdf', 'static/Apunte%2013%20Impulso%20y%20Cantidad%20de%20Movimiento%20Colisiones%20Parte%201.webp', 'static/apuntes/Apunte%2014%20Impulso%20y%20Cantidad%20de%20Movimiento%20Colisiones%20Parte%202.pdf', 'static/Apunte%2014%20Impulso%20y%20Cantidad%20de%20Movimiento%20Colisiones%20Parte%202.webp', 'static/apuntes/Apunte%2015%20Centro%20de%20Masa.pdf', 'static/Apunte%2015%20Centro%20de%20Masa.webp', 'static/apuntes/Apunte%2017%20Cantidad%20de%20Moviniento%20Angular.pdf', 'static/Apunte%2017%20Cantidad%20de%20Moviniento%20Angular.webp', 'static/apuntes/Apunte%2018%20M.A.S.pdf', 'static/Apunte%2018%20M.A.S.webp'];

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