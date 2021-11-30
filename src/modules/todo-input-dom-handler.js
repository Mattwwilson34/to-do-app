import { TodoDomHandler } from './todo-dom-handler';

const TodoInputDomHandler = {
    render: function () {
        this.storeAppTodoContainer();
        this.createElements();
        this.setAttributes();
        this.setLabelNames();
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
        this.newTodoInputDueTime = document.createElement('input');

        //Priority inputs
        this.newTodoInputRadioContainer = document.createElement('div');
        this.newTodoInputPriorityLow = document.createElement('input');
        this.newTodoInputPriorityMedium = document.createElement('input');
        this.newTodoInputPriorityHigh = document.createElement('input');
        //Priority lables
        this.newTodoInputPriorityLableLow = document.createElement('label');
        this.newTodoInputPriorityLabelMedium = document.createElement('label');
        this.newTodoInputPriorityLabelHigh = document.createElement('label');
        //Buttons
        this.newTodoInputSaveBtn = document.createElement('button');
        this.newTodoInputCancelBtn = document.createElement('button');
    },

    setAttributes: function () {
        this.newTodoInputTitle.setAttribute('placeholder', 'Add task');
        this.newTodoInputDescription.setAttribute('placeholder', 'Description');
        this.newTodoInputDueDate.setAttribute('Type', 'date');
        this.newTodoInputDueTime.setAttribute('Type', 'time');
        //Priority
        this.newTodoInputPriorityLow.setAttribute('Type', 'radio');
        this.newTodoInputPriorityMedium.setAttribute('Type', 'radio');
        this.newTodoInputPriorityHigh.setAttribute('Type', 'radio');
        this.newTodoInputPriorityLow.value = 'low';
        this.newTodoInputPriorityMedium.value = 'medium';
        this.newTodoInputPriorityHigh.value = 'high';
        //
        this.newTodoInputSaveBtn.setAttribute('type', 'button');
        this.newTodoInputCancelBtn.setAttribute('type', 'button');
    },

    setLabelNames: function () {
        this.newTodoInputPriorityLow.name = 'priority';
        this.newTodoInputPriorityMedium.name = 'priority';
        this.newTodoInputPriorityHigh.name = 'priority';
    },

    setClasses: function () {
        this.newTodoDiv.classList = 'new-to-do-div';
        this.newTodoSymbol.classList = 'new-to-do-symbol';
        this.newTodoInputTitle.classList = 'new-to-do-input-title';
        this.newTodoInputDescription.classList = 'new-to-do-input-description';
        this.newTodoInputContaier.classList = 'new-to-do-input-container';
        this.newTodoInputDueDate.classList = 'new-to-do-input-due-date';
        this.newTodoInputDueTime.classList = 'new-to-do-input-due-time';
        //Priority
        this.newTodoInputRadioContainer.classList = 'new-to-do-input-radio-container';
        this.newTodoInputPriorityLow.classList = 'new-to-do-input-priority';
        this.newTodoInputPriorityMedium.classList = 'new-to-do-input-priority';
        this.newTodoInputPriorityHigh.classList = 'new-to-do-input-priority';
        //
        this.newTodoInputSaveBtn.classList = 'new-to-do-save-btn';
        this.newTodoInputCancelBtn.classList = 'new-to-do-cancel-btn';
    },

    setText: function () {
        this.newTodoInputPriorityLableLow.textContent = 'low';
        this.newTodoInputPriorityLabelMedium.textContent = 'medium';
        this.newTodoInputPriorityLabelHigh.textContent = 'high';
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
        this.newTodoInputSaveBtn.addEventListener('click', this.storeInputValues.bind(this));
    },

    expand: function () {
        this.removeTodoSymbol();
        this.updateSyles();
        this.appendOnExpand();
    },

    updateSyles: function () {
        this.newTodoDiv.classList = 'new-to-do-div-expanded';
    },

    appendOnExpand: function () {
        this.newTodoDiv.append(this.newTodoInputDescription, this.newTodoInputContaier);
        this.newTodoInputRadioContainer.append(
            this.newTodoInputPriorityLow,
            this.newTodoInputPriorityLableLow,
            this.newTodoInputPriorityMedium,
            this.newTodoInputPriorityLabelMedium,
            this.newTodoInputPriorityHigh,
            this.newTodoInputPriorityLabelHigh
        );
        this.newTodoInputContaier.append(
            this.newTodoInputDueDate,
            this.newTodoInputDueTime,
            this.newTodoInputRadioContainer
        );
        this.appToDoContainer.append(this.newTodoInputSaveBtn, this.newTodoInputCancelBtn);
    },

    removeTodoSymbol: function () {
        this.newTodoSymbol.remove();
    },

    removeNewTodoInput: function () {
        this.newTodoDiv.remove();
    },

    removeInputButtons: function () {
        this.newTodoInputSaveBtn.remove();
        this.newTodoInputCancelBtn.remove();
    },

    removeExpandedElements: function () {
        this.newTodoInputTitle.remove();
        this.newTodoInputDescription.remove();
        this.newTodoInputDueDate.remove();
        this.newTodoInputPriorityLow.remove();
        this.newTodoDiv.remove();
        this.newTodoInputContaier.remove();
        this.newTodoInputSaveBtn.remove();
        this.newTodoInputCancelBtn.remove();
        this.render();
    },

    getPriorityInputValue: function () {
        const priorityInputs = document.querySelectorAll('.new-to-do-input-priority');
        for (let i = 0; i < priorityInputs.length; i++) {
            const input = priorityInputs[i];
            if (input.checked) {
                return input.value;
            }
        }
    },

    storeInputValues: function () {
        const newTodoInputValues = [
            this.newTodoInputTitle.value,
            this.newTodoInputDescription.value,
            this.newTodoInputDueDate.value,
            this.newTodoInputDueTime.value,
            this.getPriorityInputValue(),
        ];
        this.removeExpandedElements();
        TodoDomHandler.buildTodo(...newTodoInputValues);
    },
};

export { TodoInputDomHandler };
