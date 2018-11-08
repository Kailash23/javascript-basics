function logThis() {
	console.log(this);
}

// Note that a function returned from .bind (like `boundOnce` below),
// cannot be bound to a different `this` value ever again.
// In other words, functions can only be bound once.
// Function can only be bound once.
var boundOnce = logThis.bind({
	name: 'The first time is forever'
});

// These attempts to change `this` are futile.
boundOnce.bind({
	name: 'why even try?'
})(); // bind return the new function it doesn't call function for you. So, to call that function we have to put (); on it.
boundOnce.apply({
	name: 'why even try?'
});

boundOnce.call({
	name: 'why even try?'
});

/*
  { name: 'The first time is forever' }
  { name: 'The first time is forever' }
  { name: 'The first time is forever' }
*/
