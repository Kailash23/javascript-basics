// function for display and adding a todo

var todos = ['item 1', 'item 2', 'item 3'];

function displayTodos() {
	console.log('My Todos: ', todos);
}

function addTodo() {
	todos.push('new todo');
}

addTodo();
displayTodos();

/*
	My Todos:  [ 'item 1', 'item 2', 'item 3' ]
	My Todos:  [ 'item 1', 'item 2', 'item 3', 'new todo' ]
 */
