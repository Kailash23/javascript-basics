/*
 *	IIFE - Are used to hide the variable from rest of the program to avoid
 *	potential variable conflict.
 */

function sayHi() {
	console.log('hi');
}

sayHi()

/*
  hi
*/

(function sayHi() { // Defining a function and running it immediately afterwards.
	console.log('gg'); //IIFE - Immediately Invoked Function Expression
})()

/*
  gg
*/

(function sayHi() {
	console.log('hello');
}())

/*
  hello
*/

(sayHi)()

/*
  Hi
*/

// AccountingJS's number variable
var number = 10;

// Our Program
function ourProgram() {
	var number = 20;
	console.log(number);
}

console.log(number);

/*
  10
*/

ourProgram();

/*
  20
*/

// AccountingJS's number variable
var number = 10;

// Our Program
(function ourProgram() {
	var number = 20;
	console.log(number);
})();

console.log(number);

/*
  20
  10
*/

function(root, undefined) { // first line of accountingjs
	// the accounting js code;
}(this));



(function() {
	console.log(this);
})();

/*
  Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
*/

this

/*
  Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
*/

var myObject = {
	myMethod: function() {
		console.log(this);
	}
}

myObject.myMethod();

/*
  {myMethod: ƒ}
*/

function accountingJS(root, undefined) { // --1 Declaring the function
	//the accountingjs code;
	console.log(root);
}

accountingJS(this) // --2	Then running it

/*
  Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
*/

// The short hand for one and 2

(function(root, undefined) { // Declaring and running at the same time
	//the accoutningjs code
	console.log(root);
}(this));

/*
  Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
*/

function undefindedDemo(undefined) {
	console.log(undefined);
}
undefindedDemo()

/*
  undefined
*/
