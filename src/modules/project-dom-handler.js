import { Project } from './project-class';
import { App } from '../index';

const ProjectDomHandler = {
    render: function (project) {
        this.createElements();
        this.addClasses();
        this.addTitle(project._title);
        this.appendProject();
        this.storeAllProjectElements();
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
            element.addEventListener('click', this.selectProject);
        });
    },

    updateSelectedProjectClases: function (e) {
        this.projectElements.forEach((element) => {
            element.classList.remove('active-project');
        });
        e.target.classList.toggle('active-project');
    },

    selectProject: function (e) {
        ProjectDomHandler.updateSelectedProjectClases(e);
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
        ProjectOverlayDomHandler.storeInputValues();
        ProjectOverlayDomHandler.buildNewProject();
        ProjectOverlayDomHandler.removeOverlay();
        ProjectOverlayDomHandler.renderNewProject();
        ProjectDomHandler.bindEvents();
    },

    cancel: function () {
        ProjectOverlayDomHandler.removeOverlay();
    },

    bindEvents: function () {
        this.submitBtn.addEventListener('click', this.submit);
        this.cancelBtn.addEventListener('click', this.cancel);
    },
};

export { ProjectDomHandler };
