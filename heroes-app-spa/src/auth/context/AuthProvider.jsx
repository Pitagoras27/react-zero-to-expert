import { useReducer } from "react";
import { types } from "../../types/types";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";

// const initialState = {
//   logged: false,
// };

// const init = () => {
//   const user = JSON.parse(localStorage.getItem("user"));
//   return {
//     logged: !!user,
//     name: user,
//   };
// };

const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return {
    logged: !!user,
    user,
  };
};

export const AuthProvider = ({ children }) => {
  const [stateReducer, dispatch] = useReducer(authReducer, {}, init);

  const login = ({ user }) => {
    const dataUser = {
      id: "abc",
      name: user,
    };
    // ? It's important save data with JSON.stringify because to retrive in getItem of localstorage
    // ? use JSON.parse. Otherway it don't work.
    localStorage.setItem("user", JSON.stringify(dataUser));

    const actionType = {
      type: types.login,
      payload: dataUser,
    };

    dispatch(actionType);
  };

  const logout = () => {
    const actionType = {
      type: types.logout,
    };

    localStorage.removeItem("user");

    dispatch(actionType);
  };

  return (
    <AuthContext.Provider
      value={{
        ...stateReducer,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
