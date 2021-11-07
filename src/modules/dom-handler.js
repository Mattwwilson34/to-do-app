const DomHandler = {
    //.Project Dom handling

    renderProject: function (project) {
        this.createProjectElements();
        this.addProjectClasses();
        this.addProjectTitle(project.title);
        this.appendProject();
    },

    createProjectElements: function () {
        this.projectContainer = document.createElement('div');
    },
    addProjectClasses: function () {
        this.projectContainer.classList = 'project';
    },

    addProjectTitle: function (title) {
        this.projectContainer.textContent = title;
    },

    appendProject: function () {
        const appProjectContainer = document.getElementById('project-container');
        appProjectContainer.append(this.projectContainer);
    },

    //.Todo Dom handling

    renderAllProjectTodos: function (project) {
        project.todos.forEach((todo) => {
            this.renderTodo(todo);
        });
    },

    renderTodo: function (todo) {
        this.createTodoElements();
        this.setAttributes();
        this.addTodoClasses();
        this.addTodoTitle(todo.title);
        this.appendTodo();
    },
    createTodoElements() {
        this.todoContainer = document.createElement('div');
        this.todo = document.createElement('li');
        this.todoCheckbox = document.createElement('input');
        this.todoDeleteBtn = document.createElement('button');
    },
    setAttributes: function () {
        this.todoCheckbox.setAttribute('type', 'checkbox');
    },

    addTodoClasses: function () {
        this.todoContainer.classList = 'to-do';
        this.todoCheckbox.classList = 'to-do-checkbox';
        this.todoDeleteBtn.classList = 'to-do-delete-btn';
    },
    addTodoTitle: function (title) {
        this.todo.textContent = title;
        this.todoDeleteBtn.textContent = 'delete';
    },
    appendTodo: function () {
        const appToDoContainer = document.getElementById('to-do-container');
        this.todoContainer.append(this.todoCheckbox, this.todo, this.todoDeleteBtn);
        appToDoContainer.append(this.todoContainer);
    },
};

export { DomHandler };
