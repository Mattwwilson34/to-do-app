import { App } from '../index';
import { ToDo } from './to-do-class';
import { TodoInputDomHandler } from './todo-input-dom-handler';
import Icon from '../icons/delete.png';

const TodoDomHandler = {
    renderAllProjectTodos: function (project) {
        project.todos.forEach((todo) => {
            this.render(todo);
        });
    },

    render: function (todo) {
        this.createElements();
        this.setAttributes();
        this.setSources();
        this.addClasses(todo.complete, todo._priority);
        this.addText(todo._title);
        this.checkIfComplete(todo.complete);
        this.appendTodo();
        this.bindEvents();
    },

    createElements() {
        this.todoContainer = document.createElement('div');
        this.todo = document.createElement('li');
        this.todoCheckbox = document.createElement('input');
        this.todoPriorityCircle = document.createElement('div');
        this.todoDeleteBtn = document.createElement('img');
    },

    setAttributes: function () {
        this.todoCheckbox.setAttribute('type', 'checkbox');
    },

    setSources: function () {
        this.todoDeleteBtn.src = Icon;
    },

    addClasses: function (complete, priority) {
        this.todoContainer.classList = 'to-do';

        // check box classes check
        if (complete) {
            this.todoCheckbox.classList = 'to-do-checkbox';
            this.todo.classList = 'strike-through opacity-50';
        } else {
            this.todoCheckbox.classList = 'to-do-checkbox';
        }
        // priority circle classes check
        if (priority === 'low') {
            this.todoPriorityCircle.classList = 'to-do-priority-circle bg-color-success';
        } else if (priority === 'medium') {
            this.todoPriorityCircle.classList = 'to-do-priority-circle bg-color-warning';
        } else {
            this.todoPriorityCircle.classList = 'to-do-priority-circle bg-color-danger';
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

    checkPriority: function (priority) {},

    appendTodo: function () {
        this.appToDoContainer = document.getElementById('to-do-container');
        this.todoContainer.append(this.todoCheckbox, this.todo, this.todoPriorityCircle, this.todoDeleteBtn);
        this.appToDoContainer.insertBefore(this.todoContainer, this.newTodoDiv);
    },

    bindEvents: function () {
        this.todoDeleteBtn.addEventListener('click', this.deleteTodo.bind(this));
        this.todoCheckbox.addEventListener('click', this.completeTodo.bind(this));
        this.todoPriorityCircle.addEventListener('click', this.changePriority.bind(this));
    },

    deleteTodo: function (e) {
        const project = this.getActiveProjectFromStorage();
        const projectIndex = this.getIndexOfProject(App.todoUser, this.getActiveProjectFromStorage()._title);
        const todoTitle = this.getParentElement(e.target).children[1].textContent;
        const todoIndex = this.getIndexOfTodo(project, todoTitle);
        project.todos.splice(todoIndex, 1);
        App.todoUser.projects.splice(projectIndex, 1, project);
        App.storeAllProjectsLocally();
        this.refreshTodos();
    },

    changePriority: function (e) {
        const currentProject = this.getCurrentProject(App.todoUser.projects, this.getProjectTitle());
        const currentTodo = this.getCurrentTodo(currentProject.todos, e.target.previousSibling.textContent);
        const currentColor = window.getComputedStyle(e.target, '').getPropertyValue('background-color');
        this.updatePriority(currentTodo);
        this.changePriorityColor(currentColor, e.target);
        App.storeAllProjectsLocally();
    },

    updatePriority: function (todo) {
        if (todo._priority === 'low') {
            todo._priority = 'medium';
        } else if (todo._priority === 'medium') {
            todo._priority = 'high';
        } else {
            todo._priority = 'low';
        }
    },

    changePriorityColor: function (color, targetElement) {
        if (color === 'rgb(66, 186, 150)') {
            targetElement.classList.toggle('bg-color-warning');
        } else if (color === 'rgb(240, 173, 78)') {
            targetElement.classList.toggle('bg-color-warning');
            targetElement.classList.toggle('bg-color-danger');
        } else {
            targetElement.classList.toggle('bg-color-danger');
        }
    },

    completeTodo: function (e) {
        e.target.nextSibling.classList.toggle('strike-through');
        e.target.nextSibling.classList.toggle('opacity-50');
        const currentProject = this.getCurrentProject(App.todoUser.projects, this.getProjectTitle());
        const todoTitle = e.target.nextSibling.textContent;
        const currentTodo = this.getCurrentTodo(currentProject.todos, todoTitle);
        this.toggleTodoCompletion(currentTodo);
        App.storeAllProjectsLocally();
    },

    getParentElement: function (element) {
        return element.parentElement;
    },

    getCurrentProject: function (projectArray, projectTitle) {
        return projectArray.filter((project) => project._title === projectTitle)[0];
    },

    getIndexOfProject: function (user, projectTitle) {
        return user.projects
            .map(function (obj) {
                return obj._title;
            })
            .indexOf(projectTitle);
    },

    getCurrentTodo: function (todoArray, todoTitle) {
        return todoArray.filter((todo) => todo._title === todoTitle)[0];
    },

    getIndexOfTodo: function (project, todoTitle) {
        return project.todos
            .map(function (obj) {
                return obj._title;
            })
            .indexOf(todoTitle);
    },

    toggleTodoCompletion: function (todo) {
        todo.complete = !todo.complete;
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
        this.renderAllProjectTodos(this.getActiveProjectFromStorage());
        TodoInputDomHandler.render();
    },

    getActiveProjectFromStorage: function () {
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
