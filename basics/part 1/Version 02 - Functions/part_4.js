// function for deleting a todo

var todos = ['item 1', 'item 2', 'item 3'];

function displayTodos() {
	console.log('My Todos: ', todos);
}

function addTodo(todo) {
	todos.push(todo);
	displayTodos();
}

function changeTodo(position, newValue) {
	todos[position] = newValue;
	displayTodos();
}

function deleteTodo(position) {
	todos.splice(position, 1);
	displayTodos();
}

addTodo('hello there');
changeTodo(0, 'changed');
deleteTodo(1);

/*
	My Todos:  [ 'item 1', 'item 2', 'item 3', 'hello there' ]
	My Todos:  [ 'changed', 'item 2', 'item 3', 'hello there' ]
	My Todos:  [ 'changed', 'item 3', 'hello there' ]
 */
