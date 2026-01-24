import Todo from "./Todo";

export const TaskList = () => {
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
          <Todo />
        </div>
      </div>
    </>
  );
};
