import { App } from '../index';

class ToDo {
    constructor(title, description, dueDate, priority = 'low', complete = false) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.toDos = [];
        this.complete = complete;
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

    store(projectTitle, todo) {
        App.saveTodoLocally(projectTitle, todo);
    }
}

export { ToDo };
