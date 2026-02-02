import fs, { readFileSync } from "fs";
import path from "path";
import type { Todo } from "../Interfaces/interface-todo";

const TODOS_FILE_PATH = path.join(process.cwd(), "todos.json");

function ensureDataFile() {
  if (!fs.existsSync(TODOS_FILE_PATH)) {
    fs.writeFileSync(TODOS_FILE_PATH, "[]", "utf-8");
  }
}

export function readTodos(): Todo[] {
  ensureDataFile();

  let toods = readFileSync(TODOS_FILE_PATH, "utf-8");

  return JSON.parse(toods);
}

export function writeTodo(todos: Todo[]) {
  fs.writeFileSync(TODOS_FILE_PATH, JSON.stringify(todos, null, 2));
}
