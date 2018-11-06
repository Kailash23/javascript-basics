function logThis() {
	console.log(this);
}

function callAsMethod(callback) {
	var weirdObject = {
		name: "Don't do this in real life" // weirdObject with name property
	};
	weirdObject.callback = callback; // We added new property called callback
	weirdObject.callback(); // this will be anything left of the dot operator
}

callAsMethod(logThis);

/*
	{ name: 'Don\'t do this in real life',				// weirdObject object
	callback: [Function: logThis] }
*/
