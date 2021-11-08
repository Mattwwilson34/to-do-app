const ProjectDomHandler = {
    render: function (project) {
        this.createElements();
        this.addClasses();
        this.addTitle(project.title);
        this.appendProject();
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
        const newProjectBtnContainer = document.getElementById('new-project-btn-container');
        appProjectContainer.insertBefore(this.projectContainer, newProjectBtnContainer);
    },
};

export { ProjectDomHandler };
