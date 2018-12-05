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

/**
 * Check and normalize the value of precison (must be positive integer)
 */
function checkPrecision(val, base) {
	val = Math.round(math.abs(val));
	return isNaN(val) ? base : val;
}

/**
 * Parses a format string or object and returns format obj for use in rendering
 *
 *Parameters:
 *	string    has "default positive format" , must contain "%v"
 *	object    has `pos` (required, must contain  "%v"), `neg`, 'zero' properties
 *	function  returns a string or object like above
 *
 *Returns
 * 	object
 */

// Scenarios: High level Understanding.
// A: Valid string     ==>   convert string to  a format Object
// B: Invalid string   ==>   use default and turn it to an obj if it's not already.
// C: Valid object	   ==>   leave the object alone
// D: Invalid object   ==>   use default and turn it to an obj if it's not already.
// E: Function         ==>   depends on what the function Returns
// F: Nothing   	   ==>   use default and turn it to an obj if it's not already.

function checkCurrencyFormat(format) {
	// Default value will be "%s%v" tp start.
	var defaults = lib.settings.currency.format;
	if (typeof format === "function") {
		format = format();
	}

	if (isString(format) && format.match("%v")) {
		return {
			pos: format,
			neg: format.replace("-", "").replace("%v", "-%v"),
			zero: format
		};
	} else if (!format || !format.pos || !format.pos.match("%v")) {
		// If defaults is a string, casts it to an object for faster checking next time.
		return (!isString(defaults)) ? defaults : lib.settings.current.format = {
			pos: defaults,
			neg: defaults.replace("%v", "-%v"),
			zero: defaults
		};
	}
	// Otherwise, assume format is fine
	return format;
}
