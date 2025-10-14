// Este archivo será copiado a la carpeta dist después del build
// Para manejar rutas en aplicaciones SPA
// Pages.js - Específico para Cloudflare Pages

// Este script se activa para cada solicitud
addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  const { pathname } = url;
  
  // Servir directamente los archivos estáticos
  if (pathname.includes('.') && !pathname.endsWith('.html')) {
    return fetch(request);
  }
  
  // Redirigir todas las demás solicitudes a index.html (SPA routing)
  return fetch(`${url.origin}/index.html`, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  });
}