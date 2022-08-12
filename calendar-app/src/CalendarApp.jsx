import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { getEnvVariable } from "./helpers/getEnvVaribles";
import { RouterApp } from "./Router/RouterApp";
import { store } from "./store";

export const CalendarApp = () => {

  console.log(getEnvVariable());

  return (
    <Provider store={store}>
      <BrowserRouter>
        <RouterApp />
      </BrowserRouter>
    </Provider>
  );
};
