import { App } from '../index';
import { ToDo } from './to-do-class';
import { TodoInputDomHandler } from './todo-input-dom-handler';

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

    removeTodos: function () {
        const allTodos = document.querySelectorAll('.to-do');
        allTodos.forEach((todo) => {
            todo.remove();
        });
    },

    refreshTodos: function () {
        this.removeTodos();
        TodoInputDomHandler.removeTodoSymbol();
        TodoInputDomHandler.removeNewTodoInput();
        this.renderAllProjectTodos(this.getActiveProject());
        TodoInputDomHandler.render();
    },

    getActiveProject: function () {
        const projects = App.getProjectsFromStorage();
        const currentProject = projects.filter((project) => project._title === this.getProjectTitle());
        return currentProject[0];
    },

    getProjectTitle: function () {
        return document.getElementById('project-title-container').textContent;
    },

    buildTodo: function (title, description, dueDate, priority) {
        const todo = new ToDo(title, description, dueDate, priority);
        todo.store(this.getProjectTitle(), todo);
    },
};

export { TodoDomHandler };
