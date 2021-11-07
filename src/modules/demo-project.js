import { Project } from './project-class';
import { ToDo } from './to-do-class';

const buildDemoProject = () => {
    const demoProject = new Project('Demo', 'Demo project', '12/2/2021', 'low');

    for (let i = 0; i < 4; i++) {
        const toDo = new ToDo('Walk the dog', 'filler text', '12/2/2009', 'low');
        demoProject.todos.push(toDo);
    }

    return demoProject;
};

export { buildDemoProject };
