export const DashboardStats = () => {
  return (
    <div className="row mb-4 g-4">
      <div className="col-md-4">
        <div className="card shadow-sm border-0 h-100">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase fs-6 fw-bold">
              Total Tasks
            </h5>
            <h2 className="display-4 fw-bold text-dark mb-0">12</h2>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card shadow-sm border-0 h-100 border-start border-4 border-success">
          <div className="card-body">
            <h5 className="card-title text-success text-uppercase fs-6 fw-bold">
              Completed
            </h5>
            <h2 className="display-4 fw-bold text-success mb-0">8</h2>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card shadow-sm border-0 h-100 border-start border-4 border-warning">
          <div className="card-body">
            <h5 className="card-title text-warning text-uppercase fs-6 fw-bold">
              Pending
            </h5>
            <h2 className="display-4 fw-bold text-warning mb-0">4</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
