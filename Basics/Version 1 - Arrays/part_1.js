// creating an array
["item 1", "item 2", "item 3"];

// creating a variable
var todos = ["item 1", "item 2", "item 3"];

// console.log function
console.log("Hello", "JavaScript!");

// console.log with multiple arguments
console.log("Hello there", "JavaScript");

// console.log combining strings
console.log("Hello there" + "JavaScript");

// creating and printing a variable
var todos = ["item 1", "item 2", "item 3"];
console.log(todos);

// pretty printing a variable
var todos = ["item 1", "item 2", "item 3"];
console.log("My todos: ", todos);

// push command
var todo = ["item 1", "item 2", "item 3"];
todo.push("item 4");
todo.push("item 5");
console.log(todo);

// printing one element of an array
var todos = ["item 1", "item 2", "item 3", "item 4", "item 5"];
console.log(todos[2]);

// changing and printing a todo
var todos = ["item 1", "item 2", "item 3", "item 4", "item 5"];
todos[4] = "item 5 updated";
console.log(todos);

// accessing an out of bounds element
var todos = ["item 1", "item 2", "item 3", "item 4", "item 5"];
console.log(todos[6]);

// splicing an array
var todos = ["item 1", "item 2", "item 3", "item 4", "item 5 updated"];
todos.splice(0, 1);
console.log(todos);

// deleting out of bounds element
var todos = ["item 1", "item 2", "item 3", "item 4", "item 5 updated"];
todos.splice(0, 1); // Now, there are only 4 elements in the array
todos.splice(4, 1);
console.log(todos);

/*
	Hello JavaScript!
	Hello there JavaScript
	Hello thereJavaScript
	[ 'item 1', 'item 2', 'item 3' ]
	My todos:  [ 'item 1', 'item 2', 'item 3' ]
	[ 'item 1', 'item 2', 'item 3', 'item 4', 'item 5' ]
	item 3
	[ 'item 1', 'item 2', 'item 3', 'item 4', 'item 5 updated' ]
	undefined
	[ 'item 2', 'item 3', 'item 4', 'item 5 updated' ]
	[ 'item 2', 'item 3', 'item 4', 'item 5 updated' ]
*/
