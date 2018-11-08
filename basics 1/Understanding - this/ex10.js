function logThis() {
	console.log(this);
}

function callAndBindToGordan(callback) {
	var boundCallback = callback.bind({name: 'Gordan'});
	boundCallback();
}

callAndBindToGordan(logThis);

/*
  { name: 'Gordan' }
*/
