import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import type { Todo } from "../Interfaces/interface-todo";
import { v4 as uuidv4 } from "uuid";
import { readTodos, writeTodo } from "./todo-storage";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "todos-public")));

let Todos: Todo[] = readTodos();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "todos-public", "todo-public.html"));
});

app.get("/todos", (req, res) => {
  let todos = readTodos();
  res.send(todos);
  req;
});

app.post("/todos", (req, res) => {
  let { title } = req.body;
  let { dueDate } = req.body;

  let todo: Todo = {
    title: title,
    id: uuidv4(),
    completed: false,
    dueDate: dueDate,
  };

  Todos = readTodos();
  Todos.push(todo);
  writeTodo(Todos);
  res.send(Todos);
});

app.delete("/todos/:id", (req, res) => {
  let { id } = req.params;

  Todos = readTodos();
  let newTodos: Todo[] = [];
  const beforeLength = Todos.length;

  for (let i = 0; i < Todos.length; i++) {
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
});

app.put("/todos/:id", (req, res) => {
  let { id } = req.params;
  let { completed } = req.body;

  Todos = readTodos();

  let todoFound = false;
  for (let i = 0; i < Todos.length; i++) {
    if (Todos[i].id === id) {
      Todos[i].completed = completed;
      todoFound = true;
      break;
    }
  }

  if (!todoFound) {
    res.status(404).send({ message: "Todo not found" });
    return;
  }

  writeTodo(Todos);

  res.send(Todos);
});

export default app;
