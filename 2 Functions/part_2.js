// function for adding a todo with an argument

var todos = ['item 1', 'item 2', 'item 3'];

function displayTodos() {
	console.log('My Todos: ', todos);
}

function addTodo(todo) {
	todos.push(todo);
	displayTodos();
}

addTodo('hello there');

/*
	My Todos:  [ 'item 1', 'item 2', 'item 3', 'hello there' ]
 */
