import { App } from '../index';

class Project {
    constructor(title, description) {
        this.title = title;
        this.description = description;
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

    store() {
        App.saveProjectToUser(this);
        App.storeAllProjectsLocally();
    }

    getFromStorage() {
        localStorage.getItem(JSON.parse(this.title));
    }

    printInfo() {
        console.log(this);
    }
}

export { Project };
