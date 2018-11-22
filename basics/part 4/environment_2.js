// Current approach. One global varibale per library.
// 1. Create: Run library in IIFE, and attach to window.
// 2. Use: Access library from window.

// Another approach. One global variable period.
// 1. Create: librarySystem('libraryName', function() {/* return library */});
// 2. Use: librarySystem('libraryName');

(function() {
	var libraryStorage = {};

	function librarySystem(libraryName, callback) {
		if (arguments.length > 1) {
			// Creating a library
			libraryStorage[libraryName] = callback();
		} else {
			return libraryStorage[libraryName];
		}
	}

	window.librarySystem = librarySystem;
})();

librarySystem('sandwichLibrary', function() {
	// sandwich.js : A simple library for sandwich ingredients.
	// Demo usage: sandwichLibrary.breads.wheat ==> 'The healthy option'

	var breads = {
		wheat: 'The healthy option',
		white: 'The unhealthy option'
	};

	var fillings = {
		turkey: 'For boring sandwiches',
		cheese: 'For the vegetarians'
	};

	var sandwichLibrary = {
		breads: breads,
		fillings: fillings
	};

	return sandwichLibrary;
})

librarySystem('sandwichLibrary')

/*
  {breads: {…}, fillings: {…}}
*/

(function() {
	var sandwichLibrary = librarySystem('sandwichLibrary');
	console.log(sandwichLibrary);
})();

/*
  {breads: {…}, fillings: {…}}
*/
