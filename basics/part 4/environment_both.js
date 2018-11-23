// Dynamically chosing right thing.

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

console.log(librarySystem)

/*
ƒ librarySystem(libraryName, callback) {
	  if (arguments.length > 1) {
		  // Creating a library
		  libraryStorage[libraryName] = callback();
	  } else {
		  return libraryStorage[libraryName];
	  }
  }
*/

(function() {
	var breads = {
		wheat: 'The healthy option',
		white: 'The unhealthy option'
	};

	var filings = {
		turkey: 'For boring sandwiches',
		cheese: 'For the vegetarians'
	};

	var sandwichLibrary = {
		breads: breads,
		filings: filings
	};

	if (typeof librarySystem !== 'undefined') { // We will see library system is undefined
		// Handle librarySystem case.
		librarySystem('sandwichLibrary', function() {
			return sandwichLibrary;
		});
	} else {
		//Handle window case.
		window.sandwichLibrary = sandwichLibrary;
	}

})();

librarySystem('sandwichLibrary');

/*
	{breads: {…}, filings: {…}}
	breads: {wheat: "The healthy option", white: "The unhealthy option"}
	filings: {turkey: "For boring sandwiches", cheese: "For the vegetarians"}
	__proto__: Object
*/
