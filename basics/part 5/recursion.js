function unwrapArray(data) {
	if (!Array.isArray(data)) {
		return data;
	} else {
		return unwrapArray(data[0]);
	}
}

unwrapArray([[['my data']]]);
/*
  "my data"
*/

var link2 = {
	cracked: false,
	next: null
};

var link1 = {
	cracked: false,
	next: link2
};

function chainIsGood(link) {
	if (link.cracked) {		// 1 base case
		return false;
	}

	if (link.next) {
		return chainIsGood(link.next);
	} else {
		return true;		// 2 base case
	}
}

chainIsGood(link1 );
/*
  true
*/

function factorial(n) {
	if (n == 1) {
		return 1;
	} else {
		return n * factorial(n - 1);
	}
}

// This function will print all the element of the webpage.
// Variation 1
function logEachChildElement(element) {
	// Log current element
	console.log(element);

	if (element.children.length === 0) {
		return;
	}

	if (element.children.length > 0) {
		for (var i = 0; i < element.children.length; i++) {
			logEachChildElement(element.children[i]);
		}
	}
}

var children = document.body.children;
/*
  HTMLCollection []length: 0__proto__: HTMLCollection
*/

Array.isArray(children)
/*
  false
*/

// Variation 2
function logEachChildElement(element) {
	// Log current element
	console.log(element);

	// Repeat steps for each child element
	if (element.children.length > 0) {
		for (var i = 0; i < element.children.length; i++) {
			logEachChildElement(element.children[i]);
		}
	} else {
		return;
	}
}

// Variation 3
function logEachChildElement(element) {
	// Log current element.
	console.log(element);

	// Recursive Case: Repeat steps for each child element.
	if (element.children.length > 0) {
		for (var i = 0; i < element.children.length; i++) {
			logEachChildElement(element.children[i]);
		}
	}
	// Base Case: If there is no child do nothing.
}

function forEachChildElement(element, callback) {
	// Run callback on the current element.
	callback(element);

	if (element.children.length > 0) {
		for (var i = 0; i < element.children.length; i++) {
			forEachChildElement(element.children[i], callback);
		}
	}
}

forEachChildElement(document.body, function(element) {
	console.log(element.nodeName);
});
/*
  BODY
*/

// 1 => '$1'
// [1, 2, 3] => ['$1', '$2', '$3']
function formatMoney(numbers) {
	if (Array.isArray(numbers)) {
		return numbers.map(function(element) {
			return '$' + element;
		});
	} else {
		return '$' + numbers;
	}
}

formatMoney(1)
/*
  "$1"
*/

formatMoney([1, 2, 3])
/*
  (3) ["$1", "$2", "$3"]
*/

formatMoney([[1], [2], [3]])	// Gives the same result as above
/*
  (3) ["$1", "$2", "$3"]
*/
// Expected : [['$1']['$2']['$3']]

var res = '$' + [1]
/*
  "$1"
*/

var res = '$' + '1'
/*
  "$1"
*/

var res = '$' + 1
/*
  "$1"
*/

var res = '$' + [[[1]]]	// call the toString on array
/*
  "$1"
*/

[[[1]]].toString();
/*
  "1"
*/

function formatMoney(numbers) {
	if (Array.isArray(numbers)) {
		return numbers.map(function mapper(element) {
			return formatMoney(element);	// Called recursive function in a callback
		});
	// Base
	} else {
		return '$' + numbers;
	}
}
/*
	formatMoney([[1,2,3],[2]])
	(2) [Array(3), Array(1)]
*/
/*
  formatMoney([[[[[1]]]]])
	  [Array(1)]
	0: Array(1)
	0: Array(1)
	0: Array(1)
	0: Array(1)
	0: "$1"
*/
