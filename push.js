var push = require('web-push');

let vapidKeys = {
    publicKey: 'BM40pYlNnHiT1mRYhj_AXJqmd4TIoG9VCenkLBRy0MK6IUKOv8ApFh04eC4tLM5G16zQ7xpI5jSefu30lZaqCvA',
    privateKey: 'ztDQyUpntCQVv1jGRKj0TNph4US43Q-7jhsmmg_m-H0'
  }
  push.setVapidDetails('mailto:tannisthabiswastb@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey)


  let sub= {
      endpoint:
      "https://fcm.googleapis.com/fcm/send/fTKWQ_d_jBk:APA91bEU19yW63OLJysxscPdOSmY0JXZ-qOoUNVXbQYkIMIOVip_z9P6VRMhrUbqxa6fYrnjx5efZf6ue0CNJ8S9DsHVUWHAS3oSiuOYRK8wnrdN1mcn_U-2DzGlq7C6K4JBedUnAxzI",
      expirationTime:null,
      keys: {
          p256dh:"BPOwkI4fYpYJQO44gl8YKeDZCGQOAxRAlE7wKweUfQ19-ZCWfJfn4xcpdAi5n38DeKcSzi_g-hI6g86YCwkjQI0",
      auth:"Rop0AC76cuS5LqG9lliT8g"}
    };
  push.sendNotification(sub, 'test message')