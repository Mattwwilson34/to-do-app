import { App } from '../index';
import { ProjectOverlayDomHandler } from './project-overlay-dom-handler';
import { TodoDomHandler } from './todo-dom-handler';
import { TodoInputDomHandler } from './todo-input-dom-handler';

const ProjectDomHandler = {
    render: function (project) {
        this.createElements();
        this.addClasses();
        this.addTitle(project._title);
        this.appendProject();
        this.storeAllProjectElements();
    },

    renderProjectTodos: function (projectTodos) {
        projectTodos.forEach((todo) => {
            TodoDomHandler.render(todo);
        });
    },

    createElements: function () {
        this.projectContainer = document.createElement('div');
    },

    addClasses: function () {
        this.projectContainer.classList = 'project';
    },

    addTitle: function (title) {
        this.projectContainer.textContent = title;
    },

    appendProject: function () {
        const appProjectContainer = document.getElementById('project-container');
        this.newProjectBtnContainer = document.getElementById('new-project-btn-container');
        appProjectContainer.insertBefore(this.projectContainer, this.newProjectBtnContainer);
    },

    storeAllProjectElements: function () {
        this.projectElements = document.querySelectorAll('.project');
    },

    bindEvents: function () {
        this.newProjectBtnContainer.addEventListener('click', this.openNewProjectForm);
        this.projectElements.forEach((element) => {
            element.addEventListener('click', this.selectProject.bind(this));
        });
    },

    clearProjectListeners: function () {
        this.projectElements.forEach((element) => {
            element.removeEventListener('click', selectProject);
        });
    },

    updateSelectedProjectClases: function (e) {
        this.projectElements.forEach((element) => {
            element.classList.remove('active-project');
        });
        e.target.classList.toggle('active-project');
    },

    setFirstProjectActive: function () {
        this.projectElements[0].classList.toggle('active-project');
        this.updateProjectTitle(this.projectElements[0].textContent);
        this.renderProjectTodos(this.getProjectTodos(this.projectElements[0].textContent));
    },

    selectProject: function (e) {
        const projectTitle = e.target.textContent;
        const projectTodos = this.getProjectTodos(projectTitle);
        this.updateProjectTitle(projectTitle);
        TodoDomHandler.removeTodos();
        TodoInputDomHandler.removeNewTodoInput();
        TodoInputDomHandler.newTodoInputSaveBtn.remove();
        TodoInputDomHandler.newTodoInputCancelBtn.remove();
        this.renderProjectTodos(projectTodos);
        TodoInputDomHandler.render();
        this.updateSelectedProjectClases(e);
    },

    updateProjectTitle: function (projectTitle) {
        const projectTitleContainer = document.getElementById('project-title-container');
        projectTitleContainer.textContent = projectTitle;
    },

    getProjectTodos: function (projectTitle) {
        return App.getProjectsFromStorage().filter((project) => project._title === projectTitle)[0].todos;
    },

    openNewProjectForm: function (e) {
        ProjectOverlayDomHandler.render();
    },
};

export { ProjectDomHandler };
