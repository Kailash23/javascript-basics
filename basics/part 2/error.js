try {
	[].reduce(function() {});
} catch (e) {
	console.log(e);
}

/*
  TypeError: Reduce of empty array with no initial value
*/

try {
	[].reduce(function() {});
} catch (e) {
	console.log(e instanceof TypeError);
}

/*
  true
*/

/*
  TypeError : Creates an instance representing an error that occurs when a parameter
  is not of a valid type.
*/

try {
	throw new Error('Whoops!');
} catch (e) {
	console.log(e.name + ': ' + e.message);
}

/*
  Error: Whoops!
*/
