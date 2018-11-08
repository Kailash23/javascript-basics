var originalArray = [0, 1, 0, 1, 0];

function filterFunction(number) {
	return number == 1;
}

var outputArray = originalArray.filter(filterFunction);
console.log(outputArray);

/*
  [ 1, 1 ]
*/
