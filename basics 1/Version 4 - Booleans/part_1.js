// adding a todo object

var todoList = {
	todos : [],
	displayTodo: function() {
		console.log('My Todos', this.todos);
	},
	addTodo: function(todoText) {
		this.todos.push({
			todoText: todoText,
			completed: false
		});
		this.displayTodo();
	},
	changeTodo: function(position, todoText) {
		this.todos[position].todoText = todoText;
		this.displayTodo();
	},
	deleteTodo: function(position) {
		this.todos.splice(position, 1);
		this.displayTodo();
	},
	toggleCompleted: function(position) {
		var todo = this.todos[position];
		todo.completed = !todo.completed;
		this.displayTodo();
	}
}

todoList.addTodo('note 1');
todoList.changeTodo(0, 'note 2');
todoList.toggleCompleted(0);

/*
  My Todos [ { todoText: 'note 1', completed: false } ]
  My Todos [ { todoText: 'note 2', completed: false } ]
  My Todos [ { todoText: 'note 2', completed: true } ]
 */
