import { useEffect, useState } from "react";
import TodoComponent from "./Todo";
import type { Todo } from "../Typescript/Backend/Interfaces/interface-todo";

export const TaskList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTodos() {
      try {
        const res = await fetch("http://localhost:3000/todos");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        let data = await res.json();
        setTodos(data);
      } catch (err) {
        console.error("Error fetching todos:", err);
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    }

    fetchTodos();
  }, []);

  return (
    <>
      <div className="col-lg-8">
        <div className="card shadow-sm border-0">
          <div className="card-header bg-white py-3 border-bottom d-flex justify-content-between align-items-center">
            <h5 className="mb-0 fw-bold">My Tasks</h5>
            <div>
              <button className="btn btn-light btn-sm me-2 fw-bold text-primary">
                All
              </button>
              <button className="btn btn-white btn-sm me-2 text-muted">
                Active
              </button>
              <button className="btn btn-white btn-sm text-muted">
                Completed
              </button>
            </div>
          </div>
          <div className="card-body p-0">
            {loading && <p className="p-3 text-center">Loading tasks...</p>}
            {error && <p className="p-3 text-center text-danger">{error}</p>}
            {!loading && !error && todos.length === 0 && (
              <p className="p-3 text-center text-muted">No tasks found.</p>
            )}
            <div className="list-group list-group-flush">
              {todos.map((todo) => (
                <TodoComponent
                  key={todo.id}
                  title={todo.title}
                  dueDate={todo.dueDate || "No date"}
                  completed={todo.completed}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
