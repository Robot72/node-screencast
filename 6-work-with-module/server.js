let user = require('./user');
let db = require('db');

function run() {
	let vasya = new user.User('Vasya');
	let petr = new user.User('Petr');

	petr.hello(vasya);

	console.log(db.getPhrase('Run successful'))
}

if (module.parent) {
	exports.run = run;
} else {
	run();
}
