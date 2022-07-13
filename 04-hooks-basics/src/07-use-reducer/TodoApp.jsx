import "../css/styles.css";
import { useTodo } from "../hooks/useTodo";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";

export const TodoApp = () => {
  const { todoApp, handleAdd, handleDone, handleDelete } = useTodo();
  return (
    <div className="container mt-4">
      <h1>TodoApp</h1>
      <hr />
      <div className="row">
        <div className="col-md-7">
          <TodoList
            todos={todoApp}
            onDone={handleDone}
            onDelete={handleDelete}
          />
        </div>
        <div className="col-md-5 mt-2">
          <TodoAdd handleSubmit={handleAdd} />
        </div>
      </div>
    </div>
  );
};
