let http = require('http');
let url = require('url');
let server = http.Server();

server.listen(8080, '127.0.0.1');

server.on('request', (req, res) => {
	console.log(req.method + ' ' + req.url);
	console.log(req.headers);

	let parsedUrl = url.parse(req.url, true);
	if (parsedUrl.pathname = '/good' && parsedUrl.query.message) {
		res.setHeader('Cache-control', 'no-cache');
		res.end(parsedUrl.query.message);
	} else {
		res.statusCode = 404
		res.end('Page not found');
	}
});
