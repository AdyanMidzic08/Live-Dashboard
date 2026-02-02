import { useEffect, useState } from "react";
import type { Todo } from "../Typescript/Backend/Interfaces/interface-todo";

export const DashboardStats = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    async function fetchTodos() {
      try {
        const res = await fetch("http://localhost:3000/todos");
        if (!res.ok) return;
        const data = await res.json();
        setTodos(data);
      } catch (err) {
        console.error("Failed to fetch stats", err);
      }
    }
    fetchTodos();
  }, []);

  const total = todos.length;
  const completed = todos.filter((t) => t.completed).length;
  const pending = todos.filter((t) => !t.completed).length;

  return (
    <div className="row mb-4 g-4">
      <div className="col-md-4">
        <div className="card shadow-sm border-0 h-100">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase fs-6 fw-bold">
              Total Tasks
            </h5>
            <h2 className="display-4 fw-bold text-dark mb-0">{total}</h2>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card shadow-sm border-0 h-100 border-start border-4 border-success">
          <div className="card-body">
            <h5 className="card-title text-success text-uppercase fs-6 fw-bold">
              Completed
            </h5>
            <h2 className="display-4 fw-bold text-success mb-0">{completed}</h2>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card shadow-sm border-0 h-100 border-start border-4 border-warning">
          <div className="card-body">
            <h5 className="card-title text-warning text-uppercase fs-6 fw-bold">
              Pending
            </h5>
            <h2 className="display-4 fw-bold text-warning mb-0">{pending}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
