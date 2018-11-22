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

(function {
	var breads = {
		wheat: 'The healthy option',
		white: 'The unhealthy option'
	};

	var fillings = {
		turkey: 'For boring sandwiches',
		cheese: 'For the vegetarians'
	};

	var snadwicheLibrary = {
		breads: breads,
		filings: filings
	};

	if (typeof librarySystem !== 'undefined') { // We will see library system is undefined
		// Handle librarySystem case.
		librarySystem('sandwichLibrary', function() {
			return sandwichLibrary;
		});
	} else {
		window.sandwichLibrary = sandwichLibrary;
	}

})();
