/**
 * Tests whether supplied parameter is a string
 * from underscore.js
 */
function isString(obj) {
	return !!(obj === '' || (obj && obj.charCodeAt && obj.substr));
}

/**
 * Tests whether supplied parameter is an array
 * from underscore.js, delegates to ECMA5's native Array.isArray
 */
function isArray(obj) {
	return nativeIsArray ? nativeIsArray(obj) : toString.call(obj) === '[object Array]';
}

/**
 * Tests whether supplied parameter is a true object
 */
function isObject(obj) {
	return obj && toString.call(obj) === '[object Object]';
}

// Extends an object with a defaults object
function defaults(object, defs) {
	var key;
	object = object || {};
	defs = defs || {};
	// Iterate over object non-prototype properties:
	for (key in defs) {
		if (defs.hasOwnProperty(key)) {
			// Replace values with defaults only if undefined (allow empty/zero values):
			if (key in object !== true) { // If key is not in object literally it doesn't exist
				object[key] = defs[key];
			}
		}
	}
	return object;
}
