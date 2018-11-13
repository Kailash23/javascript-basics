var originalArray = [0, 1, 0, 1, 0];

function filterFunction(number) {
	return number == 1;
}

var outputArray = originalArray.filter(filterFunction);
console.log(outputArray);

/*
  [ 1, 1 ]
*/

var filterArray = [1, 2, 3].filter(function(element, index, array) {
	return element === index + 1;
});

console.log(filterArray)

/*
  [ 1, 2, 3 ]
*/

var filterArray = [1, 2, 3].filter(function(element, index, array) {
	console.log(element, index, array)
	return false;
});

console.log(filterArray)

/*
  1 0 [ 1, 2, 3 ]
  2 1 [ 1, 2, 3 ]
  3 2 [ 1, 2, 3 ]
  []
*/

var filterArray = [1, 2, 3].filter(function(elemnt, index, array) {
	console.log(this.myFavProgrammingSite);
}, {
	myFavProgrammingSite: 'Watch and Code'
});

/*
  Watch and Code
  Watch and Code
  Watch and Code
*/
