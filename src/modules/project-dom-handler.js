import { App } from '../index';
import { ProjectOverlayDomHandler } from './project-overlay-dom-handler';
import { TodoDomHandler } from './todo-dom-handler';
import { TodoInputDomHandler } from './todo-input-dom-handler';
import Icon from '../images/delete.png';

const ProjectDomHandler = {
    render: function (project) {
        this.createElements();
        this.addClasses();
        this.addTitle(project._title);
        this.setSources();
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
        this.title = document.createElement('span');
        this.deleteIcon = document.createElement('img');
    },

    addClasses: function () {
        this.projectContainer.classList = 'project-container';
        this.title.classList = 'project-title';
        this.deleteIcon.classList = 'project-delete-icon';
    },

    addTitle: function (title) {
        this.title.textContent = title;
    },

    setSources: function () {
        this.deleteIcon.src = Icon;
    },

    appendProject: function () {
        const appProjectContainer = document.getElementById('project-container');
        this.newProjectBtnContainer = document.getElementById('new-project-btn-container');
        this.projectContainer.append(this.title, this.deleteIcon);
        appProjectContainer.insertBefore(this.projectContainer, this.newProjectBtnContainer);
    },

    storeAllProjectElements: function () {
        this.projectElements = document.querySelectorAll('.project-container');
        this.deleteIcons = document.querySelectorAll('.project-delete-icon');
    },

    bindEvents: function () {
        this.newProjectBtnContainer.addEventListener('click', this.openNewProjectForm);
        this.projectElements.forEach((element) => {
            element.addEventListener('click', this.selectProject.bind(this));
        });
        this.deleteIcons.forEach((icon) => {
            icon.addEventListener('click', this.deleteProject.bind(this));
        });
    },

    deleteProject: function (e) {
        const clickedProjectTitle = e.target.parentElement.firstChild.textContent;
        const index = TodoDomHandler.getIndexOfProject(App.todoUser, clickedProjectTitle);
        App.todoUser.projects.splice(index, 1);
        App.storeAllProjectsLocally();
        this.refreshProjects();

        //Prevent project switching when clicking on delete icon
        e.stopPropagation();
    },

    refreshProjects: function () {
        this.removeProjects();
        App.renderProjects();
        TodoDomHandler.refreshTodos();
    },

    removeProjects: function () {
        const projects = document.querySelectorAll('.project-container');
        projects.forEach((element) => {
            element.remove();
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
        TodoInputDomHandler.removeInputButtons();
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
