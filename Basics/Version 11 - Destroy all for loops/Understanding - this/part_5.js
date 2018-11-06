function logThisWithArgument(greeting, name) {
	console.log(greeting, name);
	console.log(this);
}

logThisWithArgument('hi', 'gordan');

/*
  hi gordan
  window {...}
*/

logThisWithArgument.apply({
	name: 'Gordan'
}, ['hi', 'gordan']); // These two function calls are identical
logThisWithArgument.call({
	name: 'Gordan'
}, 'hi', 'gordan');

/*
  hi gordan
  { name: 'Gordan' }
  hi gordan
  { name: 'Gordan' }
*/
