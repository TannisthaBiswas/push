self.addEventListener('push', () =>{
self.registration.sendNotofication('test message', {});
});
