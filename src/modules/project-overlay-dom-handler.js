import { Project } from './project-class';
import { ProjectDomHandler } from './project-dom-handler';

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
        this.descriptionInput = document.createElement('textarea');
        this.btnContainer = document.createElement('div');
        this.submitBtn = document.createElement('button');
        this.cancelBtn = document.createElement('button');
    },

    addOverlayAttributes: function () {
        this.titleInput.setAttribute('type', 'text');
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
        this.descriptionInput.id = 'description-input';
        this.btnContainer.id = 'overlay-btn-container';
        this.submitBtn.id = 'overlay-form-submit-btn';
        this.cancelBtn.id = 'overlay-form-cancel-btn';
    },

    addOverlayText: function () {
        this.submitBtn.textContent = 'Save';
        this.cancelBtn.textContent = 'Cancel';
    },

    appendOverlayElements: function () {
        this.overlay.append(this.formContainer);
        this.formContainer.append(this.form);
        this.btnContainer.append(this.submitBtn, this.cancelBtn);
        this.form.append(this.titleInput, this.descriptionInput, this.btnContainer);
        document.querySelector('body').append(this.overlay);
    },

    storeInputValues: function () {
        this.newProjectInputValues = [this.titleInput.value, this.descriptionInput.value];
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
        ProjectDomHandler.deleteIcon.addEventListener('click', ProjectDomHandler.deleteProject.bind(ProjectDomHandler));
    },
};

export { ProjectOverlayDomHandler };
