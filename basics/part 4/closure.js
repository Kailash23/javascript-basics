// Function can always remmeber the varibale that they could see at creation.

(function() {
	var name = 'James';

	function sayName1() {
		console.log(name); // Name is a closure object
	}

	window.sayName1 = sayName1;
})();

(function() {
	var name = 'Kate';

	function sayName2() {
		console.log(name);
	}

	window.sayName2 = sayName2;
})();

sayName1();
sayName2();

/*
  James
  Kate
*/
