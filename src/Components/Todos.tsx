import { useState, useEffect } from "react";
import { DashboardStats } from "./DashboardStats";
import { TaskForm } from "./TaskForm";
import { TaskList } from "./TaskList";
import type { Todo } from "../Typescript/Backend/Interfaces/interface-todo";

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodos = async () => {
    try {
      const res = await fetch("http://localhost:3000/todos");
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      let data = await res.json();
      setTodos(data);
    } catch (err) {
      console.error("Error fetching todos:", err);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="container-fluid bg-light min-vh-100 p-4">
      {}
      <div className="row mb-4">
        <div className="col">
          <h1 className="display-5 text-primary fw-bold">Task Dashboard</h1>
          <p className="text-secondary">Overview of your productivity</p>
        </div>
        <div className="col-auto d-flex align-items-center">
          <div className="badge bg-white text-primary shadow-sm fs-6 p-3 rounded-pill border">
            📅 {new Date().toLocaleDateString()}
          </div>
        </div>
      </div>

      <DashboardStats todos={todos} />

      <div className="row g-4">
        <TaskForm onRefresh={fetchTodos} />
        <TaskList todos={todos} onRefresh={fetchTodos} />
      </div>

    </div>
  );
};

export default Todos;
