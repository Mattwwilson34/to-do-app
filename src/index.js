import './style.css';
import { demoProject } from './modules/demo-project';
import { ToDo } from './modules/to-do-class';

for (let i = 0; i < 4; i++) {
    const toDo = new ToDo('Walk the dog', 'filler text', '12/2/2009', 'low');
    demoProject.toDos.push(toDo);
}

console.log(demoProject);
