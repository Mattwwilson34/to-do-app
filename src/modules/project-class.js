class Project {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.todos = [];
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }
    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }
    get dueDate() {
        return this._dueDate;
    }

    set dueDate(value) {
        this._dueDate = value;
    }
    get priority() {
        return this._priority;
    }

    set priority(value) {
        this._priority = value;
    }

    store() {
        localStorage.setItem(this.title, JSON.stringify(this));
    }

    getFromStorage() {
        localStorage.getItem(JSON.parse(this.title));
    }

    printInfo() {
        console.log(this);
    }
}

export { Project };
