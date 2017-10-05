let user = require('./user');

function run() {
	let vasya = new user.User('Vasya');
	let petr = new user.User('Petr');

	petr.hello(vasya);
}

if (module.parent) {
	export.run = run;
}
