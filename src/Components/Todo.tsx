interface TodoProps {
  title: string;
  dueDate: string;
  completed: boolean;
  onToggle: () => void;
}

function Todo(props: TodoProps) {
  return (
    <div className="list-group-item d-flex justify-content-between align-items-center py-3">
      <div className="d-flex align-items-center">
        <input
          className="form-check-input me-3 fs-5 rounded-circle"
          type="checkbox"
          checked={props.completed}
          onChange={props.onToggle}
        />
        <div>
          <div
            className={
              props.completed ? "text-decoration-line-through text-muted" : ""
            }
          >
            <h6 className="mb-1 fw-bold">{props.title}</h6>
            <small className="text-muted d-block">
              Due: {props.dueDate} <span className="mx-1">•</span>{" "}
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
