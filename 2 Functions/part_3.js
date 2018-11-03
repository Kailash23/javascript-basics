// function for changing a todo given position

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

addTodo('hello there');
changeTodo(0, 'changed');

/*
	My Todos:  [ 'item 1', 'item 2', 'item 3', 'hello there' ]
	My Todos:  [ 'changed', 'item 2', 'item 3', 'hello there' ]
 */
