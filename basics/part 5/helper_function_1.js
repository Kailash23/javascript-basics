// null and undefined has corresponding boolean value false.

var obj = null;
(obj && obj.charCodeAt && obj.substr)
/*
  null
*/

var obj = null;
(obj && obj.charCodeAt && obj.substr)
/*
  undefined
*/

var obj = '';
(obj && obj.charCodeAt && obj.substr)		// Empty String
/*
  ""
*/

var obj = 0;
(obj && obj.charCodeAt && obj.substr)
/*
  0
*/

var obj = 'gordan';
(obj && obj.charCodeAt && obj.substr)
/*
  ƒ substr() { [native code] }		<== return the substr method
*/

!!('')
/*
  false
*/

/*
  JavaScript data types
  > Objects (can be as complex as you want)
  	>> {} // todoList, arrays, functions

  > Primitives (building blocks)
  	>> String
	>> Number
	>> boolean
	>> Undefined
	>> Null
	(Primitives are simple values they dont have properties and method like objects do)
*/

var primitiveString = 'gordan';		// Object creation is happening at the background

primitiveString.substr()	// Is borrowed from object version of the string
/*
  "gordan"
*/

// var objectString = new String('gordan');
// objectString.substr();

String.prototype.whatTypeAmI= function() {
	return typeof this;
}
/*
	ƒ () {
	  return typeof this;
	}
*/

typeof primitiveString;
/*
  "string"
*/

primitiveString.whatTypeAmI()
/*
  "object"
*/

var age = 50;
age.toFixed()
/*
  "50"
*/

var ageObject = new Number(50);
ageObject.toFixed()
/*
  "50"
*/
