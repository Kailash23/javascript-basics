function logThis() {
	console.log(this);
}

var explicitlySetLogThis = logThis.bind({ // Explicitly set this
	name: 'Gordon'
});

explicitlySetLogThis();

/*
  { name: 'Gordon' }
*/

// We used bind to change this value instead of window to the gordan object
