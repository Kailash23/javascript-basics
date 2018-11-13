var students = ['Kate', 'Jake', 'Soyer', 'Locke', 'Sayid'];

function logName(name) {
	console.log(name);
}

// 1
logName(students[0]);
logName(students[1]);
logName(students[2]);
logName(students[3]);
logName(students[4]);

// 2
for (var i = 0; i < students.length; i++) {
	logName(students[i]);
}

// 3
students.forEach(function logName(name) {
	console.log(name);
})

// 4
students.forEach(function (name) {
	console.log(name);
})

// 5
function forEach(myArray, myFunction){
	for (var i = 0; i < myArray.length; i++) {
		myFunction(myArray[i]);
	}
}

forEach(students, function (student){
	console.log(student);
})

forEach(students, logName)
