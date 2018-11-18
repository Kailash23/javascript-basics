var array = [1, 2, 3];
console.log(Object.keys(array));

/*
  [ '0', '1', '2' ]
*/

var array = [];
console.log(Object.keys(array));

/*
  []
*/

var array = [, , , , , , ];
console.log(Object.keys(array));

/*
  []
*/

console.log(Object.keys([]).length === 0);

/*
  true
*/

console.log(Object.keys([, , , ]).length === 0);

/*
  true
*/

console.log([, ].length);

/*
  1
*/

console.log([].length);

/*
  0
*/

var array = [1];
if (Object.keys(array).length === 1) {
	var singleIndex = Object.keys(array)[0];
}
console.log(singleIndex);

/*
  0
*/

var array = [, 1];
if (Object.keys(array).length === 1) {
	var singleIndex = Object.keys(array)[0];
}
console.log(singleIndex);

/*
  1
*/
