import './style.css';
import { demoProject } from './modules/demo-project';
import { ToDo } from './modules/to-do-class';
import { DomHandler } from './modules/dom-handler';

for (let i = 0; i < 4; i++) {
    const toDo = new ToDo('Walk the dog', 'filler text', '12/2/2009', 'low');
    demoProject.todos.push(toDo);
}

DomHandler.renderProject(demoProject);
demoProject.todos.forEach((todo) => {
    DomHandler.renderTodo(todo);
});
