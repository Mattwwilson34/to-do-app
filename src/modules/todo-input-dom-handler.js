const TodoInputDomHandler = {
    render: function () {
        this.storeAppTodoContainer();
        this.createElements();
        this.setAttributes();
        this.setClasses();
        this.setText();
        this.appendElements();
    },

    createElements: function () {
        this.newTodoDiv = document.createElement('div');
        this.newTodoSymbol = document.createElement('div');
        this.newTodoInput = document.createElement('input');
    },

    setAttributes: function () {
        this.newTodoInput.setAttribute('placeholder', 'Add task');
    },

    setClasses: function () {
        this.newTodoDiv.classList = 'new-to-do-div';
        this.newTodoSymbol.classList = 'new-to-do-symbol';
        this.newTodoInput.classList = 'new-to-do-input';
    },

    setText: function () {
        this.newTodoSymbol.textContent = '+';
    },

    storeAppTodoContainer: function () {
        this.appToDoContainer = document.getElementById('to-do-container');
    },

    appendElements: function () {
        this.newTodoDiv.append(this.newTodoSymbol, this.newTodoInput);
        this.appToDoContainer.append(this.newTodoDiv);
    },
};

export { TodoInputDomHandler };
