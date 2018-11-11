[1, 2, 3].reduce(function() {		// starting value is passed
	console.log('hi');
}, 0);

/*
  hi
  hi
  hi
*/

[6, 2, 3].reduce(function() {		// Starting value is element at pos 0
	console.log('hi');
});

/*
  hi
  hi
*/

var sum = [1, 2, 3].reduce(function(prevValue, currentValue) {
	return prevValue + currentValue;
});

console.log(sum);

/*
  6
*/

var sum = [1, 2, 3].reduce(function(accumulator, currentValue, currentIndex, array) {
		return accumulator + currentValue;
});

console.log(sum);

/*
  6
*/

var sum = [1, 2, 3].reduce(function(prevValue, currentValue) {
	return prevValue + currentValue;
}, 10);		// Initial value

console.log(sum);

/*
  16
*/
