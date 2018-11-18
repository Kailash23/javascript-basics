function reduce(array, callback, initailValue) {
	var startingIndex = 0;
	var resultSoFar = initailValue;
	var length = array.length;
	var arrayIndexes = Object.keys(array);
	// No initailValue.
	if (arguments.length < 3) {
		// Array is empty, throw TypeError.
		if (arrayIndexes.length === 0) {
			throw new TypeError('Reduce of empty array with no initail value.'); // Creating TypeError - new keyword
		}
		// If array has one element just return it.
		if (arrayIndexes.length === 1) {
			var onlyIndex = arrayIndexes[0];
			var onlyElement = array[onlyIndex];
			return onlyElement;
		}
		// We want to skip holes at the beginning of the array.
		while (startingIndex in array === false && startingIndex < length) {
			startingIndex++;
		}
		resultSoFar = array[startingIndex];
		startingIndex++;
	} else { // Has initailValue.
		// Need to check if array is empty and initailValue.
		if (arrayIndexes.length === 0 && startingIndex < length) {
			return initailValue;
		}
	}
	for (var i = startingIndex; i < length; i++) {
		if (i in array) {
			resultSoFar = callback(resultSoFar, array[i], i, array);
		}
	}
	return resultSoFar;
}
