import './style.css';
import { buildDemoProject } from './modules/demo-project';
import { ProjectDomHandler } from './modules/project-dom-handler';
import { TodoDomHandler } from './modules/todo-dom-handler';
import { TodoInputDomHandler } from './modules/todo-input-dom-handler';

let App = {
    todoUser: {
        projects: [],
    },

    init: function () {
        if (localStorage.getItem('todoUser')) {
            console.log('todoUser found! Rendering projects');
            this.todoUser.projects = this.getProjectsFromStorage();
            this.renderProjects();
            this.selectFirstProject();
            TodoInputDomHandler.render();
        } else {
            this.builDemo();
        }
    },

    builDemo: function () {
        console.log('No todoUser! Building one and storing demo project.');
        buildDemoProject();
        this.storeAllProjectsLocally();
        setTimeout(() => {
            console.log('Rendering demo project!');
        }, 1500);
        setTimeout(() => {
            this.renderProjects();
            this.selectFirstProject();
            TodoInputDomHandler.render();
        }, 2500);
    },

    /// *** Project Logic ***

    renderProjects: function () {
        const projects = this.getProjectsFromStorage();
        projects.forEach((project) => {
            ProjectDomHandler.render(project);
        });
        ProjectDomHandler.bindEvents();
    },

    selectFirstProject: function () {
        ProjectDomHandler.setFirstProjectActive();
    },

    saveProjectToUser: function (project) {
        this.todoUser.projects.push(project);
    },

    getProjectsFromStorage: function () {
        return JSON.parse(localStorage.getItem('todoUser'));
    },

    storeAllProjectsLocally: function () {
        localStorage.setItem('todoUser', JSON.stringify(this.todoUser.projects));
    },

    /// *** Todo Logic ***

    saveTodoLocally: function (projectTitle, todo) {
        const currentProject = this.todoUser.projects.filter((project) => project._title === projectTitle);
        currentProject[0].todos.push(todo);
        this.storeAllProjectsLocally();
        TodoDomHandler.refreshTodos();
    },
};

App.init();

export { App };

//? Build delete todo functionality
//? Determine how you want to handle todo scheduleing [Build timers for each todo, Run function when timer reaches 00:00:00]
