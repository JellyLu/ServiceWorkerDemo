if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/serviceWorker.js')
  .then(function(registration) {
    console.log('ServiceWorker registration successful');
  })
  .catch(function(error) {
    console.log('ServiceWorker registration failed: ', error);
  });
}
