import { App } from '../index';
import { Project } from './project-class';
import { TodoDomHandler } from './todo-dom-handler';

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
        this.renderProjectTodos(this.getProjectTodos(this.projectElements[0].textContent));
    },

    selectProject: function (e) {
        const projectTitle = e.target.textContent;
        const projectTodos = this.getProjectTodos(projectTitle);
        this.updateProjectTitle(projectTitle);
        TodoDomHandler.removeTodos();
        this.renderProjectTodos(projectTodos);
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

const ProjectOverlayDomHandler = {
    render: function () {
        this.createOverlayElements();
        this.addOverlayAttributes();
        this.addOverlayInputPlaceholders();
        this.addOverlayIds();
        this.addOverlayText();
        this.appendOverlayElements();
        this.bindEvents();
    },

    createOverlayElements: function () {
        this.overlay = document.createElement('div');
        this.formContainer = document.createElement('div');
        this.form = document.createElement('form');
        this.titleInput = document.createElement('input');
        this.dueDateInput = document.createElement('input');
        this.priorityInput = document.createElement('input');
        this.descriptionInput = document.createElement('textarea');
        this.btnContainer = document.createElement('div');
        this.submitBtn = document.createElement('button');
        this.cancelBtn = document.createElement('button');
    },

    addOverlayAttributes: function () {
        this.titleInput.setAttribute('type', 'text');
        this.dueDateInput.setAttribute('type', 'date');
        this.priorityInput.setAttribute('type', 'range');
        this.priorityInput.setAttribute('name', 'priority');
        this.priorityInput.setAttribute('min', '1');
        this.priorityInput.setAttribute('max', '3');
        this.submitBtn.setAttribute('type', 'button');
        this.cancelBtn.setAttribute('type', 'button');
    },

    addOverlayInputPlaceholders: function () {
        this.titleInput.placeholder = 'Project Title...';
        this.descriptionInput.placeholder = 'Project Description...';
    },

    addOverlayIds: function () {
        this.overlay.id = 'overlay';
        this.formContainer.id = 'overlay-form-container';
        this.form.id = 'overlay-form';
        this.titleInput.id = 'title-input';
        this.dueDateInput.id = 'due-date-input';
        this.priorityInput.id = 'priority-input';
        this.descriptionInput.id = 'description-input';
        this.btnContainer.id = 'overlay-btn-container';
        this.submitBtn.id = 'overlay-form-submit-btn';
        this.cancelBtn.id = 'overlay-form-cancel-btn';
    },

    addOverlayText: function () {
        this.submitBtn.textContent = 'Submit';
        this.cancelBtn.textContent = 'Cancel';
    },

    appendOverlayElements: function () {
        this.overlay.append(this.formContainer);
        this.formContainer.append(this.form);
        this.btnContainer.append(this.submitBtn, this.cancelBtn);
        this.form.append(
            this.titleInput,
            this.dueDateInput,
            this.priorityInput,
            this.descriptionInput,
            this.btnContainer
        );
        document.querySelector('body').append(this.overlay);
    },

    storeInputValues: function () {
        this.newProjectInputValues = [
            this.titleInput.value,
            this.descriptionInput.value,
            this.dueDateInput.value,
            this.priorityInput.value,
        ];
    },

    removeOverlay: function () {
        this.overlay.remove();
    },

    buildNewProject: function () {
        this.newProject = new Project(...this.newProjectInputValues);
        this.newProject.store();
    },

    renderNewProject: function () {
        ProjectDomHandler.render(this.newProject);
    },

    submit: function () {
        this.storeInputValues();
        this.buildNewProject();
        this.removeOverlay();
        this.renderNewProject();
        this.bindNewProjectEvent();
    },

    cancel: function () {
        this.removeOverlay();
    },

    bindEvents: function () {
        this.submitBtn.addEventListener('click', this.submit.bind(this));
        this.cancelBtn.addEventListener('click', this.cancel.bind(this));
    },

    bindNewProjectEvent: function () {
        ProjectDomHandler.projectContainer.addEventListener(
            'click',
            ProjectDomHandler.selectProject.bind(ProjectDomHandler)
        );
    },
};

export { ProjectDomHandler };
