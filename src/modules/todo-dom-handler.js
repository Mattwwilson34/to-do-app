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
        this.addText(todo.title);
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
        const appToDoContainer = document.getElementById('to-do-container');
        this.todoContainer.append(this.todoCheckbox, this.todo, this.todoDeleteBtn);
        appToDoContainer.append(this.todoContainer);
    },
};

export { TodoDomHandler };
