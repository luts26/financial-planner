const staticCacheName = 'fp-fiplapp-v3'

const assetUrls = [
	'/index.html',
	'/manifest.json',
	'/assets-fp/css/style.css',
	'/assets-fp/js/script.js',
	'/assets-fp/img/logo-round.png'
]

self.addEventListener('install', async event => {

	const cache = await caches.open(staticCacheName)
	await cache.addAll(assetUrls)

	// event.waitUntil(
	// 	caches.open(staticCacheName).then(cache => cache.addAll(assetUrls))
	// )
	console.log('install')
})

self.addEventListener('activate', event => {
	console.log('activete 111')
	event.waitUntil(self.registration?.navigationPreload.enable());
})

self.addEventListener('fetch', event => {
	console.log('fetch', event.request.url)

	event.respondWith(cacheFirst(event.request))
})

async function cacheFirst(request) {
	const cached = await caches.match(request)
	return cached ?? await fetch(request)
}
