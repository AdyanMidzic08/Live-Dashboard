import { useState } from "react";
import TodoComponent from "./Todo";
import type { Todo } from "../Typescript/Backend/Interfaces/interface-todo";

interface TaskListProps {
  todos: Todo[];
  onRefresh: () => void;
}

export const TaskList = ({ todos, onRefresh }: TaskListProps) => {
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
  const [error, setError] = useState<string | null>(null);

  const getFilteredTodos = () => {
    if (filter === "active") {
      return todos.filter((todo) => !todo.completed);
    }
    if (filter === "completed") {
      return todos.filter((todo) => todo.completed);
    }
    return todos;
  };

  const toggleTodo = async (id: string) => {
    const todoToUpdate = todos.find((t) => t.id === id);
    if (!todoToUpdate) return;

    const updatedTodo = { ...todoToUpdate, completed: !todoToUpdate.completed };

    try {
      const res = await fetch(`http://localhost:3000/todos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTodo),
      });

      if (!res.ok) {
        throw new Error(`Failed to update todo status: ${res.status}`);
      }

      onRefresh(); // Trigger parent refresh
    } catch (err) {
      console.error("Error updating todo:", err);
      setError("Failed to update task");
    }
  };

  const filteredTodos = getFilteredTodos();

  return (
    <>
      <div className="col-lg-8">
        <div className="card shadow-sm border-0">
          <div className="card-header bg-white py-3 border-bottom d-flex justify-content-between align-items-center">
            <h5 className="mb-0 fw-bold">My Tasks</h5>
            <div>
              <button
                onClick={() => setFilter("all")}
                className={`btn btn-sm me-2 ${
                  filter === "all"
                    ? "btn-light fw-bold text-primary"
                    : "btn-white text-muted"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter("active")}
                className={`btn btn-sm me-2 ${
                  filter === "active"
                    ? "btn-light fw-bold text-primary"
                    : "btn-white text-muted"
                }`}
              >
                Active
              </button>
              <button
                onClick={() => setFilter("completed")}
                className={`btn btn-sm ${
                  filter === "completed"
                    ? "btn-light fw-bold text-primary"
                    : "btn-white text-muted"
                }`}
              >
                Completed
              </button>
            </div>
          </div>
          <div className="card-body p-0">
            {error && <p className="p-3 text-center text-danger">{error}</p>}
            {!error && filteredTodos.length === 0 && (
              <p className="p-3 text-center text-muted">No tasks found.</p>
            )}
            <div className="list-group list-group-flush">
              {filteredTodos.map((todo) => (
                <TodoComponent
                  key={todo.id}
                  title={todo.title}
                  dueDate={todo.dueDate || "No date"}
                  completed={todo.completed}
                  onToggle={() => toggleTodo(todo.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
