function Dog() {	// Capitalize first letter
	//this is set to empty object, {}
	// this is returned
}

var testDog = new Dog();
testDog

/*
  Dog {}
*/

function Dog(name) {
	//this is set to empty object, {}
	this.name = name;
	// this is returned
}

var testDog = new Dog('test dog');
testDog

/*
  Dog {name: "test dog"}
*/

function Dog(name) {
	this.name = name;
	this.fetch = function() {};
}

var myDog = new Dog('Alexis');
var randomDog = new Dog('Hey');

Object.getPrototypeOf(myDog)

/*
	{constructor: ƒ}
	constructor: ƒ Dog()
	__proto__: Object
*/

Dog.prototype

/*
  {constructor: ƒ}constructor: ƒ Dog()__proto__: Object
*/

Object.getPrototypeOf(myDog) === Dog.prototype

/*
  true
*/

Object.getPrototypeOf(Dog.prototype)

/*
  {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
*/

function Dog(name) {
	this.name = name;
	// this.fetch = function() {};
}

Dog.prototype.fetch = function() {
		console.log('fetch inside of Dog.prototype');
};

var myDog = new Dog('Alexis');
var randomDog = new Dog('Hey');

/*
	ƒ () {
		  console.log('fetch inside of Dog.prototype');
	}
*/

myDog

/*
  Dog {name: "Alexis"}
*/

Object.getPrototypeOf(myDog)

/*
	{fetch: ƒ, constructor: ƒ}
	fetch: ƒ ()
	constructor: ƒ Dog(name)
	__proto__: Object
*/

Dog.prototype

/*
	{fetch: ƒ, constructor: ƒ}
	fetch: ƒ ()
	constructor: ƒ Dog(name)
	__proto__: Object
*/

Object.prototype

/*
  {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
*/

Dog.prototype

/*
  {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
*/

Object // Its a constructor function

/*
  ƒ Object() { [native code] }
*/

var myObject = new Object();

myObject

/*
  {}
*/

Object.getPrototypeOf(myObject) === Object.prototype

/*
  true
*/

/*
  Note:
  	> Capitalize constructors
	> Don;t forget `new`
	> Using prototypes makes it easier to distinguish between unique vs shared properties.
	> Array.prototype.forEach()
	> __proto__
*/

var normalArray = [];
normalArray

/*
  []length: 0__proto__: Array(0)
*/

Object.getPrototypeOf(normalArray)

/*
	[constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]
	concat: ƒ concat()
	constructor: ƒ Array()
	copyWithin: ƒ copyWithin()
	entries: ƒ entries()
	every: ƒ every()
	fill: ƒ fill()
	filter: ƒ filter()
	find: ƒ find()
	findIndex: ƒ findIndex()
	flat: ƒ flat()
	flatMap: ƒ flatMap()
	forEach: ƒ forEach()
	includes: ƒ includes()
	indexOf: ƒ indexOf()
	join: ƒ join()
	keys: ƒ keys()
	lastIndexOf: ƒ lastIndexOf()
	length: 0
	map: ƒ map()
	pop: ƒ pop()
	push: ƒ push()
	reduce: ƒ reduce()
	reduceRight: ƒ reduceRight()
	reverse: ƒ reverse()
	shift: ƒ shift()
	slice: ƒ slice()
	some: ƒ some()
	sort: ƒ sort()
	splice: ƒ splice()
	toLocaleString: ƒ toLocaleString()
	toString: ƒ toString()
	unshift: ƒ unshift()
	values: ƒ values()
	Symbol(Symbol.iterator): ƒ values()
	Symbol(Symbol.unscopables): {copyWithin: true, entries: true, fill: true, find: true, findIndex: true, …}
	__proto__: Object
*/

var constructorArray = new Array();
constructorArray

/*
  []length: 0__proto__: Array(0)
*/

Object.getPrototypeOf(constructorArray)

/*
	[constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]
	concat: ƒ concat()
	constructor: ƒ Array()
	copyWithin: ƒ copyWithin()
	entries: ƒ entries()
	every: ƒ every()
	fill: ƒ fill()
	filter: ƒ filter()
	find: ƒ find()
	findIndex: ƒ findIndex()
	flat: ƒ flat()
	flatMap: ƒ flatMap()
	forEach: ƒ forEach()
	includes: ƒ includes()
	indexOf: ƒ indexOf()
	join: ƒ join()
	keys: ƒ keys()
	lastIndexOf: ƒ lastIndexOf()
	length: 0
	map: ƒ map()
	pop: ƒ pop()
	push: ƒ push()
	reduce: ƒ reduce()
	reduceRight: ƒ reduceRight()
	reverse: ƒ reverse()
	shift: ƒ shift()
	slice: ƒ slice()
	some: ƒ some()
	sort: ƒ sort()
	splice: ƒ splice()
	toLocaleString: ƒ toLocaleString()
	toString: ƒ toString()
	unshift: ƒ unshift()
	values: ƒ values()
	Symbol(Symbol.iterator): ƒ values()
	Symbol(Symbol.unscopables): {copyWithin: true, entries: true, fill: true, find: true, findIndex: true, …}
	__proto__: Object
*/
