/*
  Two ways of creating regular expression
  1> var re = /ab+c/;
  2> var re = new RegExp('ab+c');
*/

// Its a concise way to look for patterns in strings

'gordy'.match(/g/)
/*
  ["g", index: 0, input: "gordy", groups: undefined]
*/

'gordy'.match(/or/)
/*
  ["or", index: 1, input: "gordy", groups: undefined]
*/

'g'.match(/g/);		//
/*
  ["g", index: 0, input: "g", groups: undefined]
*/

'g'.match(/r/);
/*
  null
*/

'gg'.match(/g/);	// By default it will return first match even if there is many.
/*
  ["g", index: 0, input: "gg", groups: undefined]
*/

'gg'.match(/g/g);	// First 'g' pattern, Last 'g' - global flag
/*
(2) ["g", "g"]
*/

'gggggggggg'.match(/g/g);
/*
  (10) ["g", "g", "g", "g", "g", "g", "g", "g", "g", "g"]
*/

'ag'.match(/g/g);
/*
  ["g"]
*/

'ag'.match(/a|g/g);	// match any character thats 'a' and 'g'. (having pipe '|')
/*
  (2) ["a", "g"]
*/

'ag'.match(/ag/g);	// match a followed by 'g' (not having pipe '|')
/*
  ["ag"]
*/

'abcdefg'.match(/a|b|c|d|e|f|g/g);
/*
  (7) ["a", "b", "c", "d", "e", "f", "g"]
*/

'abcdefg'.match(/./g);	// meta characters (.) <- any given characters
/*
  (7) ["a", "b", "c", "d", "e", "f", "g"]
*/

'abcdefgABC123#$%'.match(/./g);
/*
  (16) ["a", "b", "c", "d", "e", "f", "g", "A", "B", "C", "1", "2", "3", "#", "$", "%"]
*/

'abcdefgABC123#$% '.match(/./g);
/*
  (17) ["a", "b", "c", "d", "e", "f", "g", "A", "B", "C", "1", "2", "3", "#", "$", "%", " "]
*/

'abcdefgABC123#$% '.length
/*
  17
*/

'abCD12%&'.match(/[abcdefghijklmnopqrstuvwxyz]/g);	// concept of set []
/*
  (2) ["a", "b"]
*/

// Ranges only work with sets
'abCD12%&'.match(/[a-z]/g);
/*
  (2) ["a", "b"]
*/

var myPassword = 'abAB';
myPassword.match(/[a-z]/g);
/*
  (2) ["a", "b"]
*/

myPassword.match(/[a-z]/g).length;
/*
  2
*/

var myPassword = 'abcABC';

var lowercaseCharacters = {
	a: true,
	b: true,
	c: true
};

var numberOflowercaseChracters = 0;

for (var i = 0; i < myPassword.length; i++) {
	var currentCharacter = myPassword[i];
	if (lowercaseCharacters[currentCharacter]) {
		numberOflowercaseChracters++;
	}
}

console.log(numberOflowercaseChracters);
/*
  3
*/

var myPassword = 'ABCabc';
myPassword.match(/[A-Z]/g).length;
/*
  3
*/

'1abcABD23@#$ @'.match(/[0-9]/g);
/*
  (3) ["1", "2", "3"]
*/

'1abcABD23@#$ @'.match(/[a-zA-Z0-9]/g);
/*
  (9) ["1", "a", "b", "c", "A", "B", "D", "2", "3"]
*/

'1abcABD23@#$ @'.match(/[a-zA-Z@]/g)
/*
  (8) ["a", "b", "c", "A", "B", "D", "@", "@"]
*/

//Special characters: Anything that's not a letter or a digit.
'1abcABD23@#$ @'.match(/[^a-zA-Z0-9]/g) 	// ^ ->  carrat (negation operator)
/*
  (5) ["@", "#", "$", " ", "@"]
*/

// Word: A series of consecutive letters
'DONT!be*a^framework-chaser'.match(/[a-zA-Z]/g);
/*
  (22) ["D", "O", "N", "T", "b", "e", "a", "f", "r", "a", "m", "e", "w", "o", "r", "k", "c", "h", "a", "s", "e", "r"]
*/
// Quantifiers - {}
'DONT!be*a^framework-chaser'.match(/[a-zA-Z]{1,20}/g);
/*
  (5) ["DONT", "be", "a", "framework", "chaser"]
*/

'DONT!be*a^framework-chaser'.match(/[a-zA-Z]{1,}/g);
/*
  (5) ["DONT", "be", "a", "framework", "chaser"]
*/

/*
	Matches the preceding expression 1 or more times. Equivalent to {1,}.

	For example, /a+/ matches the 'a' in "candy" and all the a's in "caaaaaaandy",
	but nothing in "cndy".
*/

'DONT!be*a^framework-chaser'.match(/[a-zA-Z]+/g);
/*
  (5) ["DONT", "be", "a", "framework", "chaser"]
*/

'DONT!be*a^framework-chaser'.match(/[a-z]+/gi);		// Case insensitive flag - i
/*
  (5) ["DONT", "be", "a", "framework", "chaser"]
*/
