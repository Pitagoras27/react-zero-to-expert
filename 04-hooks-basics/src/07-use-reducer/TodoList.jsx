import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos, onDelete, onDone }) => {
  return (
    <>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onDone={onDone}
        />
      ))}
    </>
  );
};
