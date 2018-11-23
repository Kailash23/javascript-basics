// Dynamically chosing right thing.

window.sandwichLibrary = 'Library with books about sandwiches';

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
		var oldSandwichLibrary = window.sandwichLibrary;

		sandwichLibrary.noConflict = function() {
			window.sandwichLibrary = oldSandwichLibrary;
			return sandwichLibrary;
		};
		window.sandwichLibrary = sandwichLibrary;
	}

})();


// This will reset window.sandwichLibrary to the original value.
// .noConflict will also return the sandwichLibrary object.
var sandwichJS = sandwichLibrary.noConflict();

// You want to print winodw.sandwichLibrary (You want the string)
console.log(sandwichLibrary);

/*
  Library with books about sandwiches
*/

// We can still use SandwichJS.
console.log(sandwichJS.breads.white);

/*
  The unhealthy option
*/
