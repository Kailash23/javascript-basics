function Person(name) {		// This is what happen when we use new keyword
	// this = {};
	this.name = name;
	this.species = 'human';
	// return  this;
}

var person = new Person('Gordan');
console.log(person);

/*
  Person { name: 'Gordan', species: 'human' }
*/

Person('Gordan');	// this will be window in this case
					// we added name and species property in window (global place).
