let EventEmitter = require('events').EventEmitter;

let server = new EventEmitter();

server.on('request', (request) => {
	request.approved = true;
});

server.on('request', (request) => {
	console.log(request);
});

server.emit('request', {from: 'Client'});

server.emit('request', {from: 'Other Client'});
