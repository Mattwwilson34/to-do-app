const TodoInputDomHandler = {
    render: function () {
        this.storeAppTodoContainer();
        this.createElements();
        this.setAttributes();
        this.setClasses();
        this.setText();
        this.appendElements();
        this.bindEvents();
    },

    createElements: function () {
        this.newTodoDiv = document.createElement('div');
        this.newTodoSymbol = document.createElement('div');
        this.newTodoInputTitle = document.createElement('input');
        this.newTodoInputDescription = document.createElement('input');
        this.newTodoInputContaier = document.createElement('div');
        this.newTodoInputDueDate = document.createElement('input');
        this.newTodoInputPriority = document.createElement('input');
        this.newTodoInputSaveBtn = document.createElement('button');
        this.newTodoInputCancelBtn = document.createElement('button');
    },

    setAttributes: function () {
        this.newTodoInputTitle.setAttribute('placeholder', 'Add task');
        this.newTodoInputDescription.setAttribute('placeholder', 'Description');
        this.newTodoInputDueDate.setAttribute('Type', 'date');
        this.newTodoInputPriority.setAttribute('Type', 'range');
        this.newTodoInputSaveBtn.setAttribute('type', 'button');
        this.newTodoInputCancelBtn.setAttribute('type', 'button');
    },

    setClasses: function () {
        this.newTodoDiv.classList = 'new-to-do-div';
        this.newTodoSymbol.classList = 'new-to-do-symbol';
        this.newTodoInputTitle.classList = 'new-to-do-input-title';
        this.newTodoInputDescription.classList = 'new-to-do-input-description';
        this.newTodoInputContaier.classList = 'new-to-do-input-container';
        this.newTodoInputDueDate.classList = 'new-to-do-input-due-date';
        this.newTodoInputPriority.classList = 'new-to-do-input-priority';
        this.newTodoInputSaveBtn.classList = 'new-to-do-save-btn';
        this.newTodoInputCancelBtn.classList = 'new-to-do-cancel-btn';
    },

    setText: function () {
        this.newTodoSymbol.textContent = '+';
        this.newTodoInputSaveBtn.textContent = 'Save';
        this.newTodoInputCancelBtn.textContent = 'Cancel';
    },

    storeAppTodoContainer: function () {
        this.appToDoContainer = document.getElementById('to-do-container');
    },

    appendElements: function () {
        this.newTodoDiv.append(this.newTodoSymbol, this.newTodoInputTitle);
        this.appToDoContainer.append(this.newTodoDiv);
    },

    bindEvents: function () {
        this.newTodoInputTitle.addEventListener('click', this.expand.bind(this));
        this.newTodoInputCancelBtn.addEventListener('click', this.removeExpandedElements.bind(this));
    },

    expand: function () {
        this.newTodoSymbol.remove();
        this.updateSyles();
        this.appendOnExpand();
    },

    updateSyles: function () {
        this.newTodoDiv.classList = 'new-to-do-div-expanded';
    },

    appendOnExpand: function () {
        this.newTodoDiv.append(this.newTodoInputDescription, this.newTodoInputContaier);
        this.newTodoInputContaier.append(this.newTodoInputDueDate, this.newTodoInputPriority);
        this.appToDoContainer.append(this.newTodoInputSaveBtn, this.newTodoInputCancelBtn);
    },

    removeNewTodoInput: function () {
        this.newTodoDiv.remove();
    },

    removeExpandedElements: function () {
        this.newTodoInputTitle.remove();
        this.newTodoInputDescription.remove();
        this.newTodoInputDueDate.remove();
        this.newTodoInputPriority.remove();
        this.newTodoDiv.remove();
        this.newTodoInputContaier.remove();
        this.newTodoInputSaveBtn.remove();
        this.newTodoInputCancelBtn.remove();
        this.render();
    },
};

export { TodoInputDomHandler };

///! When div is expanded all other inputs asides from title lose focus immediately not allowing input.
///! Might have to completely remove all inputs and replace them inside the newly expanded div?
