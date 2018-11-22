window

/*
  Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
*/

var variableThatIsNotInsideOfAFunction = 'not in a function'; // Golobal Variable

/*
  "not in a function"
*/

window.myVariable = 'Juggernaut';

/*
   "Juggernaut"
*/

myVariable

/*
  "Juggernaut"
*/

console.log(myVariable);

/*
  Juggernaut
*/

(function() { // Immediately Invoked Function
	// sandwich.js : A simple library for sandwich ingrediants.
	// Demo usage: sandwichLibrary.breads.wheat ==> 'The healthy option'

	var breads = {
		wheat: 'The healthy option',
		white: 'The healthy option'
	};

	var filings = {
		turkey: 'For boring sandwitches',
		cheese: 'For the vegetarians'
	};

	var sandwichLibrary = {
		breads: breads,
		fillings: filings
	};

	window.sandwichLibrary = sandwichLibrary;
	// Saved the object we want to expose directly into the window.
	// Through this we avoid saving bunch of variable to the window, this will reduce
	// the number of global variable that can conflict with each other.
})();

sandwichLibrary.breads.wheat

/*
  "The healthy option"
*/

(function() {
	console.log(sandwichLibrary.breads.wheat);
})();

/*
  The healthy option
*/

(function(root, undefined) { // Immediately Invoked Function
	// sandwich.js : A simple library for sandwich ingrediants.
	// Demo usage: sandwichLibrary.breads.wheat ==> 'The healthy option'

	var breads = {
		wheat: 'The healthy option',
		white: 'The healthy option'
	};

	var filings = {
		turkey: 'For boring sandwitches',
		cheese: 'For the vegetarians'
	};

	var sandwichLibrary = {
		breads: breads,
		fillings: filings
	};

	//window.sandwichLibrary = sandwichLibrary;
	root.sandwichLibrary = sandwichLibrary;
	// Saved the object we want to expose directly into the window.
	// Through this we avoid saving bunch of variable to the window, this will reduce
	// the number of global variable that can conflict with each other.
})(this);

sandwichLibrary.breads.wheat

/*
  "The healthy option"
*/

(function(root, undefined) { // Immediately Invoked Function
	// sandwich.js : A simple library for sandwich ingrediants.
	// Demo usage: sandwichLibrary.breads.wheat ==> 'The healthy option'

	var breads = {
		wheat: 'The healthy option',
		white: 'The healthy option'
	};

	var filings = {
		turkey: 'For boring sandwitches',
		cheese: 'For the vegetarians'
	};

	var sandwichLibrary = {
		breads: breads,
		fillings: filings
	};

	//window.sandwichLibrary = sandwichLibrary;
	root['sandwichLibrary'] = sandwichLibrary;
	// Saved the object we want to expose directly into the window.
	// Through this we avoid saving bunch of variable to the window, this will reduce
	// the number of global variable that can conflict with each other.
})(this);

sandwichLibrary.breads.wheat

/*
"The healthy option"
*/
