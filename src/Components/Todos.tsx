import { DashboardStats } from "./DashboardStats";
import {TaskForm } from "./TaskForm";
import {TaskList }from "./TaskList";
import Habits from "./Habits";

const Todos = () => {
  return (
    <div className="container-fluid bg-light min-vh-100 p-4">
      {/* Header */}
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

      <DashboardStats />

      <div className="row g-4">
        <TaskForm />
        <TaskList />
      </div>

      <Habits />
    </div>
  );
};

export default Todos;
