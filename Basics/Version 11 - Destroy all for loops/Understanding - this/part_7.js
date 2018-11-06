function outerFunction(callback) {
	callback();
}

function logThis() {
	console.log(this);
}

outerFunction(logThis);		// window
