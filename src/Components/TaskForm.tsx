import { useState } from "react";

interface TaskFormProps {
  onRefresh: () => void;
}

export const TaskForm = ({ onRefresh }: TaskFormProps) => {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async () => {
    if (title.trim() === "" || dueDate.trim() === "") {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 2000);
      return;
    }

    setStatus("loading");
    const newTask = {
      title: title,
      dueDate: dueDate,
      completed: false,
    };

    try {
      const res = await fetch("http://localhost:3000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTask),
      });

      if (!res.ok) {
        throw new Error(`Failed to create new task: ${res.status}`);
      }

      setStatus("success");
      setTitle("");
      setDueDate("");
      onRefresh(); // Refresh the list

      setTimeout(() => setStatus("idle"), 2000);
    } catch (err) {
      console.error("Error creating new task:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <div className="col-lg-4">
      <div className="card shadow-sm border-0">
        <div className="card-header bg-white py-3 border-bottom-0">
          <h5 className="mb-0 fw-bold">Add New Task</h5>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <label className="form-label text-muted small fw-bold">TITLE</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="What needs to be done?"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-muted small fw-bold">
              DUE DATE
            </label>
            <input
              type="date"
              className="form-control form-control-lg"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>
          <button
            className={`btn w-100 py-2 fw-bold ${
              status === "success"
                ? "btn-success"
                : status === "error"
                  ? "btn-danger"
                  : "btn-primary"
            }`}
            onClick={handleSubmit}
            disabled={status === "loading"}
          >
            {status === "loading"
              ? "Creating..."
              : status === "success"
                ? "Task Created!"
                : status === "error"
                  ? title === "" || dueDate === ""
                    ? "Please fill all fields!"
                    : "Error! Try again."
                  : "+ Create Task"}
          </button>
        </div>
      </div>
    </div>
  );
};
