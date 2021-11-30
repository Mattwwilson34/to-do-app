import { App } from '../index';
import { Project } from './project-class';
import { ToDo } from './to-do-class';

const buildDemoProject = () => {
    //demo
    const demoProject = new Project('Demo', 'Demo project', '12-2-2021', '10:45', 'low');
    const todo1 = new ToDo('Walk the dog', 'filler text', '10-12-2008', '10:45', 'low');
    const todo2 = new ToDo('Walk the cat', 'filler text', '10-12-2008', '10:45', 'low');
    const todo3 = new ToDo('Walk the donkey', 'filler text', '10-12-2008', '10:45', 'low');
    const todo4 = new ToDo('Walk the horse', 'filler text', '10-12-2008', '10:45', 'low');
    const todoArray = [todo1, todo2, todo3, todo4];
    todoArray.forEach((todo) => {
        demoProject.todos.push(todo);
    });
    App.saveProjectToUser(demoProject);

    //seed
    const seedProject = new Project('Seed', 'Seed project', '11-02-2003', '12:45', 'medium');
    const todo5 = new ToDo('Buy Milk', 'filler text', '10-12-2008', '12:45', 'low');
    const todo6 = new ToDo('Go to the gym', 'filler text', '10-12-2008', '12:45', 'low');
    const todo7 = new ToDo('Purchase flights to Denver', 'filler text', '10-12-2008', '12:45', 'low');
    const todo8 = new ToDo('Meditate', 'filler text', '10-12-2008', '12:45', 'low');
    const todoArray2 = [todo5, todo6, todo7, todo8];
    todoArray2.forEach((todo) => {
        seedProject.todos.push(todo);
    });
    App.saveProjectToUser(seedProject);
};

export { buildDemoProject };
