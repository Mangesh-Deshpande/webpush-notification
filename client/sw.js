console.log('service worker loaded');

self.addEventListener('push', e => {
  const data = e.data.json();

  e.waitUntil(self.registration.showNotification(data.title, {
    body: "Push sent by Mangesh",
    icon: "https://img.icons8.com/ios-filled/72/maxcdn.png",
  })
  )
})
