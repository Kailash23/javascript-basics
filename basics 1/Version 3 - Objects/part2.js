// functions inside objects

var gordon = {
	name: 'Gordon',
	sayName: function () {
		console.log(this);
	}
};

console.log(gordon.sayName());

/*
  { name: 'Gordon', sayName: [Function: sayName] }
 */
