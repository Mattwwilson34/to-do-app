import './style.css';
import { buildDemoProject } from './modules/demo-project';
import { DomHandler } from './modules/dom-handler';

const App = {
    init: function () {
        const demoProject = buildDemoProject();
        DomHandler.renderProject(demoProject);
        DomHandler.renderAllProjectTodos(demoProject);
        demoProject.store();
    },
};

App.init();
