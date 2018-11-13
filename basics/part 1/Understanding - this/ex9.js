function logThis() {
	console.log(this);
}

function callAsConstructor(callback) {
	new callback();
}

callAsConstructor(logThis);		// the new object created by logThis will be logged to the console

/*
  logThis {}
*/
