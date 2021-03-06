// adding a todo object

var todoList = {
	todos: [],
	displayTodo: function () {
		if (this.todos.length === 0) {
			console.log('Your todo list is empty!');
		} else {
			console.log('My Todos:');
			for (var i = 0; i < this.todos.length; i++) {
				if (this.todos[i].completed === true) {
					console.log('(x)', this.todos[i].todoText);
				} else {
					console.log('( )', this.todos[i].todoText);
				}
			}
		}
	},
	addTodo: function (todoText) {
		this.todos.push({
			todoText: todoText,
			completed: false
		});
		this.displayTodo();
	},
	changeTodo: function (position, todoText) {
		this.todos[position].todoText = todoText;
		this.displayTodo();
	},
	deleteTodo: function (position) {
		this.todos.splice(position, 1);
		this.displayTodo();
	},
	toggleCompleted: function (position) {
		var todo = this.todos[position];
		todo.completed = !todo.completed;
		this.displayTodo();
	}
}

todoList.addTodo('first');
todoList.addTodo('second');
todoList.addTodo('third');
todoList.toggleCompleted(1);


/*
  My Todos:
  ( ) first
  My Todos:
  ( ) first
  ( ) second
  My Todos:
  ( ) first
  ( ) second
  ( ) third
  My Todos:
  ( ) first
  (x) second
  ( ) third
 */
