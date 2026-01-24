const Habits = () => {
  return (
    <div className="card shadow-sm border-0 mt-4">
      <div className="card-header bg-white py-3 border-bottom d-flex justify-content-between align-items-center">
        <h5 className="mb-0 fw-bold">Daily Habits</h5>
        <button className="btn btn-primary btn-sm fw-bold">+ Add Habit</button>
      </div>
      <div className="card-body">
        <div className="row g-3">
          {/* Habit 1 */}
          <div className="col-md-6 col-lg-3">
            <div className="p-3 border rounded-3 bg-light h-100 d-flex flex-column justify-content-between">
              <div className="d-flex justify-content-between mb-2">
                <span className="badge bg-primary bg-opacity-10 text-primary">
                  HEALTH
                </span>
                <small className="text-muted"> 12 days</small>
              </div>
              <h6 className="fw-bold mb-3">Drink 3L Water</h6>
              <div className="d-flex gap-1 justify-content-center">
                {/* Mockup for week days */}
                {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
                  <div
                    key={i}
                    className={`rounded-circle d-flex align-items-center justify-content-center small fw-bold ${i < 4 ? "bg-primary text-white" : "bg-white border text-muted"}`}
                    style={{ width: "28px", height: "28px", fontSize: "10px" }}
                  >
                    {day}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Habit 2 */}
          <div className="col-md-6 col-lg-3">
            <div className="p-3 border rounded-3 bg-light h-100 d-flex flex-column justify-content-between">
              <div className="d-flex justify-content-between mb-2">
                <span className="badge bg-success bg-opacity-10 text-success">
                  LEARNING
                </span>
                <small className="text-muted"> 5 days</small>
              </div>
              <h6 className="fw-bold mb-3">Read 30 Mins</h6>
              <div className="d-flex gap-1 justify-content-center">
                {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
                  <div
                    key={i}
                    className={`rounded-circle d-flex align-items-center justify-content-center small fw-bold ${i < 2 ? "bg-success text-white" : "bg-white border text-muted"}`}
                    style={{ width: "28px", height: "28px", fontSize: "10px" }}
                  >
                    {day}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Habit 3 */}
          <div className="col-md-6 col-lg-3">
            <div className="p-3 border rounded-3 bg-light h-100 d-flex flex-column justify-content-between">
              <div className="d-flex justify-content-between mb-2">
                <span className="badge bg-warning bg-opacity-10 text-warning">
                  FITNESS
                </span>
                <small className="text-muted"> 0 days</small>
              </div>
              <h6 className="fw-bold mb-3">Morning Stretch</h6>
              <div className="d-flex gap-1 justify-content-center">
                {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
                  <div
                    key={i}
                    className={`rounded-circle d-flex align-items-center justify-content-center small fw-bold ${"bg-white border text-muted"}`}
                    style={{ width: "28px", height: "28px", fontSize: "10px" }}
                  >
                    {day}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Habit 4 */}
          <div className="col-md-6 col-lg-3">
            <div className="p-3 border rounded-3 bg-light h-100 d-flex flex-column justify-content-between">
              <div className="d-flex justify-content-between mb-2">
                <span className="badge bg-info bg-opacity-10 text-info">
                  MINDFULNESS
                </span>
                <small className="text-muted"> 24 days</small>
              </div>
              <h6 className="fw-bold mb-3">Meditation</h6>
              <div className="d-flex gap-1 justify-content-center">
                {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
                  <div
                    key={i}
                    className={`rounded-circle d-flex align-items-center justify-content-center small fw-bold ${i < 6 ? "bg-info text-white" : "bg-white border text-muted"}`}
                    style={{ width: "28px", height: "28px", fontSize: "10px" }}
                  >
                    {day}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Habits;
