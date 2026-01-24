function Todo() {
  return (
    <div className="list-group-item d-flex justify-content-between align-items-center py-3">
      <div className="d-flex align-items-center">
        <input
          className="form-check-input me-3 fs-5 rounded-circle"
          type="checkbox"
        />
        <div>
          <div>
            <h6 className="mb-1 fw-bold">Buy Groceries</h6>
            <small className="text-muted d-block">
              Due: Today <span className="mx-1">•</span>{" "}
              <span className="badge bg-success bg-opacity-10 text-success">
                PERSONAL
              </span>
            </small>
          </div>
        </div>
        <button className="btn btn-sm text-danger opacity-50 hover-opacity-100">
          Remove
        </button>
      </div>
    </div>
  );
}

export default Todo;
