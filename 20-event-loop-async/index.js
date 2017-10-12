let http = require('http');
let fs = require('fs');

http.createServer((req, res) => {
	debugger;
	fs.readFile('index.html', (err, info) => {
		if (err) {
			res.end('Error');
		} else {
			res.end(info);
		}
	});
	res.end('alternative');
}, 8080);

console.log('Server is running!');
