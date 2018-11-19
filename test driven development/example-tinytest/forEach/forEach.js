function forEach(array, callback, optionalThisObject) {
	var forEachCallback = callback;
	// If optionalThisObject exists.
	if (optionalThisObject) {
		// Want to bind the optionalThisObject to the callback function.
		forEachCallback = callback.bind(optionalThisObject);
	}

	for (var i = 0; i < array.length; i++) {
		forEachCallback(array[i], i, array);
	}
}
