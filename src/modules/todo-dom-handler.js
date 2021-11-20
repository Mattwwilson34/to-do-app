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
        this.addClasses(todo.complete);
        this.addText(todo._title);
        this.checkIfComplete(todo.complete);
        this.appendTodo();
        this.bindEvents();
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

    addClasses: function (complete) {
        this.todoContainer.classList = 'to-do';

        if (complete) {
            this.todoCheckbox.classList = 'to-do-checkbox';
            this.todo.classList = 'strike-through opacity-50';
        } else {
            this.todoCheckbox.classList = 'to-do-checkbox';
        }

        this.todoDeleteBtn.classList = 'to-do-delete-btn';
    },

    addText: function (title) {
        this.todo.textContent = title;
        this.todoDeleteBtn.textContent = 'delete';
    },

    checkIfComplete: function (complete) {
        if (complete) {
            this.todoCheckbox.checked = true;
        } else {
            this.todoCheckbox.checked = false;
        }
    },

    appendTodo: function () {
        this.appToDoContainer = document.getElementById('to-do-container');
        this.todoContainer.append(this.todoCheckbox, this.todo, this.todoDeleteBtn);
        this.appToDoContainer.insertBefore(this.todoContainer, this.newTodoDiv);
    },

    bindEvents: function () {
        this.todoDeleteBtn.addEventListener('click', this.deleteTodo.bind(this));
        this.todoCheckbox.addEventListener('click', this.completeTodo.bind(this));
    },

    deleteTodo: function (e) {
        const project = this.getActiveProject();
        const projectIndex = this.getIndexOfProject(App.todoUser, this.getActiveProject()._title);
        const todoTitle = this.getParentElement(e.target).children[1].textContent;
        const todoIndex = this.getIndexOfTodo(project, todoTitle);
        project.todos.splice(todoIndex, 1);
        App.todoUser.projects.splice(projectIndex, 1, project);
        App.storeAllProjectsLocally();
        this.refreshTodos();
    },

    completeTodo: function (e) {
        e.target.nextSibling.classList.toggle('strike-through');
        e.target.nextSibling.classList.toggle('opacity-50');
        const currentProject = App.todoUser.projects.filter((project) => project._title === this.getProjectTitle())[0];
        const todoTitle = e.target.nextSibling.textContent;
        const currentTodo = currentProject.todos.filter((todo) => todo._title === todoTitle)[0];
        currentTodo.complete = !currentTodo.complete;
        App.storeAllProjectsLocally();
    },

    getParentElement: function (element) {
        return element.parentElement;
    },

    getIndexOfProject: function (user, projectTitle) {
        return user.projects
            .map(function (obj) {
                return obj._title;
            })
            .indexOf(projectTitle);
    },

    getIndexOfTodo: function (project, todoTitle) {
        return project.todos
            .map(function (obj) {
                return obj._title;
            })
            .indexOf(todoTitle);
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
