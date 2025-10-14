// Cloudflare Workers config for SPA
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  const { pathname } = url
  
  // Static assets: serve directly
  if (pathname.includes('.')) {
    // This is a request for a static file, pass it through
    return fetch(request)
  }
  
  // All other routes: serve index.html for SPA
  return fetch(`${url.origin}/index.html`)
}