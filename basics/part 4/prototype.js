// Object.create(dog);
// Object.getPrototypeOf(myDog);

// 1. Main idea behind prototype.

var dog = { // dog object with simple method fetch
	fetch: function() {
		console.log('fetch');
	}
};

var myDog = Object.create(dog);
myDog.name = 'Alexis';

var randomDog = Object.create(dog);
randomDog.name = 'Hey';

myDog.name

/*
  "Alexis"
*/

randomDog.name

/*
  "Hey"
*/

myDog.fetch()

/*
  fetch
*/

randomDog.fetch()

/*
  fetch
*/

Object.getPrototypeOf(myDog) === dog

/*
  true
*/

Object.getPrototypeOf(randomDog) === dog

/*
  true
*/

// 2. Hidden Layer

// Automatically set the prototype of the
// object to the default object prototype.

var dog = {
	fetch: function() {
		console.log('fetch');
	}
};

var defaultObjectPrototype = Object.getPrototypeOf(dog);

Object.getPrototypeOf(defaultObjectPrototype);

/*
  null
*/

var noPrototype = Object.create(null) // Only time we get object that doesn't have default object prototype.
Object.getPrototypeOf(noPrototype)

var normalObject = {};
Object.getPrototypeOf(normalObject);

/*
  {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
*/

normalObject.hasOwnProperty('name')

/*
  false
*/

normalObject.name = 'Gordan';

/*
  "Gordan"
*/

normalObject.hasOwnProperty('name')

/*
  true
*/
