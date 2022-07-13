export const TodoItem = ({ todo, onDone, onDelete }) => {
  const { id, description, done } = todo;
  return (
    <div className="flex-container mt-2" role="item-todo">
      <h6 onClick={() => onDone(id)} className="d-inline-block flex-item">
        <span
          aria-label="span"
          className={`align-self-center ${
            done ? "text-decoration-line-through" : ""
          }`}
        >
          {description}
        </span>
      </h6>
      <button
        onClick={() => onDelete(id)}
        className="btn btn-danger d-inline-block flex-item"
      >
        Delete
      </button>
    </div>
  );
};
