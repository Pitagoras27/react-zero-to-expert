import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { TodoApp } from "./07-use-reducer/TodoApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    <TodoApp />
  </BrowserRouter>
  // </React.StrictMode>
);
