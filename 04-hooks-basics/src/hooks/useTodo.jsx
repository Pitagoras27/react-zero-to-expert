import { useReducer } from "react";
import { actionTypes } from "../07-use-reducer/actions/actionsTypes";
import { todoReducer } from "../07-use-reducer/todoReducer";

const initialState = [];

export const useTodo = () => {
  // const [todoApp, setTodoApp] = useState(initialState);
  const [todoApp, dispatch] = useReducer(todoReducer, initialState);

  const handleAdd = (todoAdded) => {
    dispatch({
      type: actionTypes.add,
      payload: todoAdded,
    });
    // setTodoApp(pre => ([...pre, todoAdded]));
  };

  const handleDone = (id) => {
    dispatch({
      type: actionTypes.toggle,
      payload: id,
    });
  };

  const handleDelete = (idDelete) => {
    console.log("handleDekete", actionTypes.remove);
    dispatch({
      type: actionTypes.remove,
      payload: idDelete,
    });
    // const updateTodo = todoApp.filter(item => item.id !== idDelete)
    // setTodoApp(updateTodo);
  };

  return {
    todoApp,
    handleAdd,
    handleDone,
    handleDelete,
  };
};
