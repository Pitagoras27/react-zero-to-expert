import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { RouterApp } from "./Router/RouterApp";
import { store } from "./store";

export const CalendarApp = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RouterApp />
      </BrowserRouter>
    </Provider>
  );
};
