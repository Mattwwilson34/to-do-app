import './style.css';
import { buildDemoProject } from './modules/demo-project';
import { ProjectDomHandler } from './modules/project-dom-handler';
import { TodoDomHandler } from './modules/todo-dom-handler';

const App = {
    todoUser: {
        projects: [],
    },

    init: function () {
        if (localStorage.getItem('todoUser')) {
            console.log('todoUser found! Rendering projects');
            this.todoUser.projects = this.getProjectsFromStorage();
            this.renderProjects();
            this.selectFirstProject();
            TodoDomHandler.addTodo();
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
        }, 2500);
    },

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
};

App.init();

export { App };

//todo Select project [should populate project todo's on selection]
