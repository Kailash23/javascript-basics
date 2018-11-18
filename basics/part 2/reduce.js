[1, 2, 3].reduce(function() { // will run arr.len times
	console.log('hi');
}, 0);

/*
  hi
  hi
  hi
*/

[1, 2, 3].reduce(function() { // will run arr.len - 1 times
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
}, 10); // Initial value

console.log(sum);

/*
  16
*/

function reduce(array, callback, startingValue) {
	var resultSoFar = startingValue;
	for (var i = 0; i < array.length; i++) {
		resultSoFar = callback(resultSoFar, array[i]);
	}
	return resultSoFar;
}

var res = reduce(['j', 'o', 'r', 'd', 'a', 'n'], function(resultSoFar, nextLetter) {
	return resultSoFar + nextLetter;
}, '');

console.log(res);

/*
  jordan
*/
