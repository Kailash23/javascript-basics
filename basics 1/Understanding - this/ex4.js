function logThis() {
	console.log(this);
}

logThis.apply({
	name: 'Gordan'
});

logThis.call({
	name: 'Gordan'
});

/*
	{ name: 'Gordan' }
	{ name: 'Gordan' }
*/

// We used bind to change this value instead of window to the gordan object
// bind return a copy of function and then can run in second step.
// apply and call - change the value of this inside the function and then run it immediately.
