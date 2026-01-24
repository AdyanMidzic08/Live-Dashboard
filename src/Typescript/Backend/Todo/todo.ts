import express from 'express';
import type { Todo } from '../Interfaces/interface-todo';
import { v4 as uuidv4 } from 'uuid';
import { readTodos, writeTodo } from './todo-storage';

const app = express();

app.use(express.json())

let Todos: Todo[] = [];

app.get("/", (req,res) => {
    res.send('hello world');
    req;
});

app.get("/todos", (req,res) => {
    let todos = readTodos();
    res.send(todos);
    req;
})

app.post("/todos", (req,res) => {
    let { title } = req.body;
    let { dueDate } = req.body;

    let todo: Todo = {
        title: title,
        id: uuidv4(),
        completed: false,
        dueDate: dueDate
    }

    Todos.push(todo);
    writeTodo(Todos);
    res.send(Todos);
})

app.delete("/todos/:id", (req,res) => {
    let { id } = req.params;
    let newTodos: Todo[] = [];
    const beforeLength = Todos.length;

    for(let i = 0; i < Todos.length; i++) {
        if (Todos[i].id !== id) {
            newTodos.push(Todos[i]);
        }
    }

    if (beforeLength === newTodos.length) {
        res.status(404).send({ message: "Todo not found" });
        return;
    }

    Todos = newTodos;
    writeTodo(Todos);
    res.send(Todos);
})

app.put("/todos/:id", (req,res) => {
    let { id } = req.params;
    let { completed } = req.body;
    let todoMaked = completed;

    for(let i = 0; i < Todos.length; i++) {
        if (Todos[i].id === id) {
            if(Todos[i].completed == false) {
                Todos[i].completed = true;
                todoMaked = true;
            }else {
                Todos[i].completed = false;
                todoMaked = false;
            }
        }
    }
    writeTodo(Todos);

    res.send(Todos);
});

export default app;
