import io from 'socket.io-client';

const client = io.connect('http://localhost:8081')
client.on('allplayers', (q) => {
  console.log(q);
});
client.emit('newplayer');
