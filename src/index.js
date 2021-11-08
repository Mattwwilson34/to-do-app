import './style.css';
import { buildDemoProject } from './modules/demo-project';
import { ProjectDomHandler } from './modules/project-dom-handler';
import { TodoDomHandler } from './modules/todo-dom-handler';

const App = {
    init: function () {
        const demoProject = buildDemoProject();
        ProjectDomHandler.render(demoProject);
        TodoDomHandler.renderAllProjectTodos(demoProject);
        demoProject.store();
    },
};

App.init();
