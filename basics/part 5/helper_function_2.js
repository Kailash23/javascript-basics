// Array.prototype.toString - this will show whats in the array will not show type.
[].toString()
/*
  ""
*/

[1, 2, 3].toString()
/*
  "1,2,3"
*/

var myObject = {};
myObject.toString();
/*
  "[object Object]"
*/

// call methods on objects
Object.prototype.toString.call([]); // Manupulating this value
/*
  "[object Array]"		// Borrowing method from objects and using it on array instead
*/

Object.prototype.toString({});
/*
  "[object Object]"
*/

toString.call({}) === '[object Object]'
/*
  true
*/

toString.call([]) === '[object Object]'
/*
  false
*/

toString.call({	name: 'gordan'}) === '[object Object]'
/*
  true
*/

toString.call(1) === '[object Object]'
/*
  false
*/

function isObject(obj) {
	return obj && toString.call(obj) === '[object Object]';
}
isObject(null)
/*
  null
*/

function isObject(obj) {
	return Boolean(obj && toString.call(obj) === '[object Object]');
}
isObject(null)
/*
  false
*/

function isObject(obj) {
	return !!(obj && toString.call(obj) === '[object Object]');
}
isObject(null)
/*
  false
*/

// Extends an object with a defaults object
function defaults(object, defs) {
	var key;
	object = object || {};
	defs = defs || {};
	// Iterate over object non-prototype properties:
	for (key in defs) {
		if (defs.hasOwnProperty(key)) {
			// Replace values with defaults only if undefined (allow empty/zero values):
			if (key in object !== true) { // If key is not in object literally it doesn't exist
				object[key] = defs[key];
			}
		}
	}
	return object;
}

var defaultCar = {
	wheels: 4,
	tires: 'standard',
	color: 'grey'
};

var gordanCar = {
	color: 'blue'
};

defaults(gordanCar, defaultCar);
/*
  {color: "blue", wheels: 4, tires: "standard"}
*/

// hasOwnProperty illustration
var dog = {
	bark: function() { // dog will have bark method
		console.log('bark');
	}
};

// myDog inherit form dog
var myDog = Object.create(dog);
myDog.name = 'Gordan';

myDog
/*
  {name: "Gordan"}name: "Gordan"__proto__: bark: ƒ ()__proto__: Object
*/

for (property in myDog) { // will deal with property on object as well as object prototypes
	console.log(property);
}
/*
  name
  bark
*/

for (property in myDog) {
	if (myDog.hasOwnProperty(property)) {
		console.log(property);
	}
}
/*
  name
*/

// Back to default function
defaults({color: null}, {color: 'grey',	wheels: 4}) // Edge case
/*
  {color: null, wheels: 4}
*/

'gordan'.match('g')
/*
  ["g", index: 0, input: "gordan", groups: undefined]
*/

'gordan'.match('k')
/*
  null
*/

'gordan'.replace('g', 'j')
/*
  jordan
*/

10.265.toFixed()
/*
  "10"
*/

10.265.toFixed(2)
/*
  "10.27"
*/

// Technique 1
10.235.toFixed(2) // toFixed is not working thats because of the number representation as a power of 2
/*
  "10.23"
*/

// Technique 2
Math.round(10.235 * 100) / 100
/*
  10.24
*/

0.62.toFixed(2)
/*
  "0.62"	// Used to return a string
*/

0.62.toFixed(3)
/*
  "0.620"	// Used for formatting
*/

1.005 * 100
/*
  100.49999999999999
*/

Math.round(1.005 * 100)
/*
  100
*/

// Appraoch 1
1.005e2 // 1.005 * 10^2 -> A better way of writing 1.005 * 100 (move decimal points)
/*
  100.5
*/

// Approach 2
1.005 * 100
/*
  100.49999999999999
*/

Math.round(1.00e2)
/*
  101
*/

Math.round(1.005e2) / 100
/*
  1.01
*/

Math.round(1.005e2)
/*
  101
*/

101 + 'e-2'
/*
  "101e-2"
*/

Number("101e-2")
/*
  1.01
*/

// Better toFixed method
function betterToFixed(value, precision) {
	var exponentialForm = Number(value + 'e' + precision);
	var rounded = Math.round(exponentialForm);
	var finalResult = Number(rounded + 'e-' + precision);
	return finalResult.toFixed(2);
}

betterToFixed(1.005, 2)
/*
  "1.01"
*/

betterToFixed(.615, 2)
/*
  "0.62"
*/

betterToFixed(10.235, 2)
/*
  "10.24"
*/
