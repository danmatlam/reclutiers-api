var Pusher = require('pusher');

var pusher = new Pusher({
  appId: '1065937',
  key: '3b49318cc8a294ab90cd',
  secret: 'ecb06403dc2805fd969e',
  cluster: 'us2',
  useTLS: true
});

pusher.trigger('my-channel', 'my-event', {'candidates': 'Una vida sin reflexion no merece ser vivida'});