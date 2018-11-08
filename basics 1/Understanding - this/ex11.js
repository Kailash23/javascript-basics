function logThis() {
	console.log(this);
}

function callAndBindToGordan(callback) {
	var boundCallback = callback.bind({name: 'Gordan'});
	boundCallback();
}

callAndBindToGordan(logThis);

var boundOnce = logThis.bind({name: 'The first time is forever'});
callAndBindToGordan(boundOnce);

/*
	{ name: 'Gordan' }
	{ name: 'The first time is forever' }
*/
