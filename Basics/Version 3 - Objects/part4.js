// creating a anonymous function to add todos, change todos based on position & delete a todo


var todoList = {
	todos: ['item 1', 'item 2', 'item 3'],
	displayTodos: function() {
		console.log('My Todos: ', this.todos);
	},
	addTodo: function(todo) {
		this.todos.push(todo);
		this.displayTodos();
	},
	changeTodo: function(position, newValue) {
		this.todos[position] = newValue;
		this.displayTodos();
	},
	deleteTodo: function(position) {
		this.todos.splice(position, 1);
		this.displayTodos();
	}
};

console.log(todoList.addTodo('plunker'));
console.log(todoList.changeTodo(0, 'first'));
console.log(todoList.deleteTodo(1));

/*
  My Todos:  [ 'item 1', 'item 2', 'item 3', 'plunker' ]
  My Todos:  [ 'first', 'item 2', 'item 3', 'plunker' ]
  My Todos:  [ 'first', 'item 3', 'plunker' ]
 */
