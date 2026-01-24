export const TaskForm = () => {
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
            />
          </div>
          <div className="mb-4">
            <label className="form-label text-muted small fw-bold">
              CATEGORY
            </label>
            <select className="form-select">
              <option>Personal</option>
              <option>Work</option>
              <option>Urgent</option>
            </select>
          </div>
          <button className="btn btn-primary w-100 py-2 fw-bold">
            + Create Task
          </button>
        </div>
      </div>
    </div>
  );
};
