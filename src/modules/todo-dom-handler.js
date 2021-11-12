const TodoDomHandler = {
    renderAllProjectTodos: function (project) {
        project.todos.forEach((todo) => {
            this.render(todo);
        });
    },

    render: function (todo) {
        this.createElements();
        this.setAttributes();
        this.addClasses();
        this.addText(todo._title);
        this.appendTodo();
    },

    createElements() {
        this.todoContainer = document.createElement('div');
        this.todo = document.createElement('li');
        this.todoCheckbox = document.createElement('input');
        this.todoDeleteBtn = document.createElement('button');
    },

    setAttributes: function () {
        this.todoCheckbox.setAttribute('type', 'checkbox');
    },

    addClasses: function () {
        this.todoContainer.classList = 'to-do';
        this.todoCheckbox.classList = 'to-do-checkbox';
        this.todoDeleteBtn.classList = 'to-do-delete-btn';
    },

    addText: function (title) {
        this.todo.textContent = title;
        this.todoDeleteBtn.textContent = 'delete';
    },

    appendTodo: function () {
        this.appToDoContainer = document.getElementById('to-do-container');
        this.todoContainer.append(this.todoCheckbox, this.todo, this.todoDeleteBtn);
        this.appToDoContainer.insertBefore(this.todoContainer, this.newTodoDiv);
    },

    addTodo: function () {
        this.newTodoDiv = document.createElement('div');
        this.newTodoSymbol = document.createElement('div');
        this.newTodoInput = document.createElement('input');
        this.newTodoDiv.classList = 'new-to-do-div';
        this.newTodoSymbol.classList = 'new-to-do-symbol';
        this.newTodoInput.classList = 'new-to-do-input';
        this.newTodoSymbol.textContent = '+';
        this.newTodoInput.setAttribute('placeholder', 'Add task');
        this.newTodoDiv.append(this.newTodoSymbol, this.newTodoInput);
        this.appToDoContainer.append(this.newTodoDiv);
    },

    removeTodos: function () {
        const allTodos = document.querySelectorAll('.to-do');
        allTodos.forEach((todo) => {
            todo.remove();
        });
    },
};

export { TodoDomHandler };
