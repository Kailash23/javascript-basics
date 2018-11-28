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

toString.call({name: 'gordan'}) === '[object Object]'
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
defaults({color: null}, {color: 'grey',	wheels: 4})	// Edge case
/*
  {color: null, wheels: 4}
*/
