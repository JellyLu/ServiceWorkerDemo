if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/serviceWorker.js')
  .then(function(registration) {
    console.log('ServiceWorker registration successful');
  })
  .catch(function(error) {
    console.log('ServiceWorker registration failed: ', error);
  });
}

const subscribeToPushNotificationButton = document.querySelector('.subscribe-button');
subscribeToPushNotificationButton.addEventListener('click', subscribe);

function subscribe() {
  console.log('click subscribeToPushNotificationButton');
  subscribeToPushNotificationButton.disabled = true;

  navigator.serviceWorker.ready
  .then(function(serviceWorkerRegistration) {
    serviceWorkerRegistration.pushManager.subscribe({
      userVisibleOnly: true
    })
    .then(function(subscription) {
      isPushEnabled = true;
      subscribeToPushNotificationButton.textContent = 'Disable Push Message';
      subscribeToPushNotificationButton.disabled = false;

    })
    .catch(function(e) {
      if (Notification.permission === 'denied') {
        console.warn('Permission for Notification was denied');
        subscribeToPushNotificationButton.disabled = true;
      } else {
        console.error('Unable to subscribe to push', e);
        subscribeToPushNotificationButton.disabled = false;
        subscribeToPushNotificationButton.textContent = 'Enable Push message';
      }
    })
  })
}
