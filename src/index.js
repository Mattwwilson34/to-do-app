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
            this.renderProjects(this.getProjectsFromStorage());
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
        }, 2000);
        setTimeout(() => {
            this.renderProjects(this.getProjectsFromStorage());
        }, 4000);
    },

    getProjectsFromStorage: function () {
        let projects = localStorage.getItem('todoUser');
        projects = JSON.parse(projects);
        return projects;
    },

    renderProjects: function (projects) {
        projects.forEach((project) => {
            ProjectDomHandler.render(project);
            ProjectDomHandler.bindEvents();
            TodoDomHandler.renderAllProjectTodos(project);
        });
    },

    saveProject: function (project) {
        this.todoUser.projects.push(project);
    },

    storeAllProjectsLocally: function () {
        localStorage.setItem('todoUser', JSON.stringify(this.todoUser.projects));
    },
};

App.init();

export { App };

/// Not sure why 2 demos are being added to todoUser Object
