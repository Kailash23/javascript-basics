// 1: Reverse string
function reverseString(str) {
	return str.split('').reverse().join('');
}

reverseString("callmejuggernaut") // "tuanreggujemllac"

var str = "string";
[firstLetter] = str;
console.log(firstLetter); // s

var str = "string" [...letters] = str;
console.log(letters);
/*
  (6) ["s", "t", "r", "i", "n", "g"]
*/

function check(str) {
	return [...String(str)];
}

check("home");
/*
  (4) ["h", "o", "m", "e"]
*/

check(1, 2, 3, 4);
/*
  (4) ["1", "2", "3", "4"]
*/

check([1, 2, 3, 4])
/*
  (5) ["1", ",", "2", ",", "3"]
*/

function check(str) {
	return [...String(str)].join('');
}

check(123); // "123"

check("home"); // "home"

check([1, 2, 3, 4]); // "1,2,3,4"

function reverseString(str) {
	return [...String(str)].reverse().join('');
}

reverseString('stackoverflow'); // "wolfrevokcats"

reverseString(2304); // "4032"

reverseString([1, 2, 3]); // "3,2,1"

function reverse(string) {
	var strRev = "";
	for (var i = string.length - 1; i >= 0; i--) {
		strRev += string[i];
	}
	return strRev;
}

reverse("zebra"); // "arbez"

// 2: Getting object type by constructor name
Object.prototype.toString.call("String"); // "[object String]"

// 3: Finding an object's class
/*
 We want this function to take the sum of the numbers passed to it
 It can be called as sum(1, 2, 3) or sum([1, 2, 3]) and should give 6.
*/
function sum(...arguments) {
	if (arguments.length === 1) {
		var [ele] = arguments
		if (ele instanceof Array) {
			return sum(...ele)
		}
	}
	return arguments.reduce((a, b) => a + b)
}

sum([1, 2, 3]); // 6
sum(1, 2, 3); // 6

/*
 To find whether an object was constructed by a certain constructor or one
 inheriting from it, you can use the instanceof command.
*/

console.log([].constructor === Object); // false
console.log([].constructor === Array); // true

/*
  Every value in JavaScript besides null and undefined also has a constructor
  property storing the function that was used to construct it. This even works
  with primitives.
  Whereas instanceof also catches instances of subclasses.
  using obj.constructor does not
*/

function isNumber(value) {
	if (value === null || value === undefined) {
		return false;
	}
	return value.constructor === Number
}

isNumber(5) // true

// 4: Destructuring
/*
   The destructuring assignment syntax is a JavaScript expression that makes it
   possible to extract data from arrays or objects using a syntax that mirrors
   the construction of array and object literals.
*/

var foo = ['one', 'two', 'three'];

// without destructuring
var one = foo[0];
var two = foo[1];
var three = foo[2];

// with destructuring
var [one, two, three] = foo;

// 5: Comparing Strings Lexicographically - localeCompare()

function strcmp(a, b) {
	if (a === b) {
		return 0;
	}
	if (a > b) {
		return 1;
	}
	return -1;
}

console.log(strcmp("hello", "world")); // -1
console.log(strcmp("hello", "hello")); // 0
console.log(strcmp("world", "hello")); // 1

var arr = ["bananas", "cranberrires", "apples"];
arr.sort(function(a, b) {
	return a.localeCompare(b);
});

console.log(arr); // (3) ["apples", "bananas", "cranberrires"]

function wordCount(val) {
	var whom = val.match(/\S+/g);
}

// 6. Regular Expression in JS

var str = "Halig was a great Saxon warrior!";
str.match(/\s+/g); // (5) [" ", " ", " ", " ", " "]
str.match(/\S+/g); // (6) ["Halig", "was", "a", "great", "Saxon", "warrior!"]
str.replace(/\s+/g, '') // "HaligwasagreatSaxonwarrior!"
str.split(/\r/).length // 1
/*
  n*	Matches any string that contains zero or more occurrences of n
  n?	Matches any string that contains zero or one occurrences of n
  n$	Matches any string with n at the end of it
  \r	Find a carriage return character
  \n	Find a new line character
*/

function wordCount(val) {
	var words = val.match(/\S+/g);
	return {
		characterNoSpace: val.replace(/\s+/g, '').length,
		characters: val.length,
		words: words ? words.length : 0,
		lines: val.split(/r*\n/).length,
		space: val.match(/\s+/g).length
	};
}

wordCount("Leofric was a great commander!")
/*
  {characterNoSpace: 26, characters: 30, words: 5, lines: 1, space: 4}
*/

// 7. Spliting a string into an array
var s = "one, two, three, four, five";
s.split(", "); // (5) ["one", "two", "three", "four", "five"]
s.split(", ").join("-"); // "one-two-three-four-five"

// 8. Detecting a String
/*
  To detect whether a parameter is a primitive string, use typeof.
  If you ever have a String object, via new String("somestr"), then the above
  will not work. In this instance, we can use instanceof.
*/
var str = "primitive string";
console.log(typeof str); // string

var strObj = new String("string object");
console.log(typeof strObj); // object
console.log(strObj instanceof String); // true

var isString = function(value) {
	return typeof value === "string" || value instanceof String;
}

/*
  we can make use of toString function of Object. This can be useful if we have to
  check for other types as well say in a switch statement, as this method supports
  other datatypes as well just like typeof.
*/
var pString = "Primitive String";
var oString = new String("Object From of a String");
Object.prototype.toString.call(pString); // "[object String]"
Object.prototype.toString.call(oString); // "[object String]"

/*
  A more robust solution is to not detect a string at all, rather only check for
  what functionality is required
*/
var str = "string";
if (str.substring) {
	// Generic check for a substring method
	console.log("It's a string!");
}
/*
  It's a string!
*/

if (str.substring === String.prototype.substring) {
	console.log(str.substring(0, ));
}
/*
  string
*/

console.log(str.substring());

// 8. Substring with slice
var s = "0123456789abcdefg";
s.slice(0, 5); // "01234"
s.slice(5, 6); // "5"
s.slice(5, 5) // ""
s.slice(10); // "abcdefg"

// 9. String Find and Replace Functions
/*
  indexOf() will return the index of the first occurrence of searchString in the
  string. If searchString is not found, then -1 is returned.
*/
var string = "hello World";
console.log(string.indexOf("o"));	// 4
console.log(string.lastIndexOf("o"));	// 7

var string = "Hello, World!";
console.log( string.includes("Hello") ); // true

var string = "Hello World!";
string.replace("Hello", "Bye");
console.log(string);	// Hello World!

var string = "Hello World!";
string = string.replace("Hello", "Bye");
console.log(string);	// Bye World!

string = string.replace(/W.{3}d/g, "Universe");
console.log(string);	// Bye Universe!

var string = "Uhtred of Bebbanburg";
string.match(/[a-zA-Z]+/g);		// (3) ["Uhtred", "of", "Bebbanburg"]

var string = "format words";
string = string.replace( /([a-zA-Z])([a-zA-Z]+)/g, function(match, g1, g2) {
	console.log(g1);
});
/*
  f
  w
*/

var string = "format words";
string = string.replace( /([a-zA-Z])([a-zA-Z]+)/g, function(match, g1, g2) {
	console.log(g2);
});
/*
  ormat
  ords
*/

var string = "format words";
string = string.replace( /([a-zA-Z])([a-zA-Z]+)/g, function(match, g1, g2) {
	return g1.toUpperCase() + g2.toLowerCase();
});
/*
  "Format Words"
*/

'Hellow World'.indexOf('Wor'); // 7

var myString = "abc";
var n = 3;
new Array(n + 1).join(myString); // Returns "abcabcabc"

"abc".repeat(3); // Returns "abcabcabc"

var strArray = [..."sky is blue"];
console.log(strArray);
/*
  (11) ["s", "k", "y", " ", "i", "s", " ", "b", "l", "u", "e"]
*/
