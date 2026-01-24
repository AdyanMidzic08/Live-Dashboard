import express from 'express';
import type { Todo } from '../Interfaces/interface-todo';
import { v4 as uuidv4 } from 'uuid';

const app = express();
const PORT = 3000;

app.use(express.json())

let Todos: Todo[] = [];

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
}) 

app.get("/", (req,res) => {
    res.send('hello world');
    req;
});

app.get("/todos", (req,res) => {
    res.send(Todos);
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
    res.send(Todos);
})
