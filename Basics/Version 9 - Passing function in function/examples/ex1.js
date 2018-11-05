function callThisFunction(ourFunction) {		// Higher order function - callThisFunction
	ourFunction();
}

callThisFunction(function logTenNumbers() {		// Callback function - logTenNumbers
	for (var i = 0; i < 10; i++) {
		console.log(i);
	}
});

/*
	0
	1
	2
	8
	3
	4
	5
	6
	7
	9
 */

/*
  Higher Order Functions:
  > Functions that accept other functions.
  > Enhance the behavior of other functions.

  Callback Functions:
  > The functions that are passed into the higher order functions.
*/
