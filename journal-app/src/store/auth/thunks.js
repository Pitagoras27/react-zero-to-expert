import {
  registerUserWithEmailPassword,
  singWithGoogle,
} from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlide";

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startSigningWithGoogle = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await singWithGoogle();
    if (!result.ok) return dispatch(logout(result.errorMessage));

    dispatch(login(result));
  };
};

export const startCreatingUserWithEmailPassword = ({
  displayName,
  email,
  password,
}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await registerUserWithEmailPassword({
      displayName,
      email,
      password,
    });

    const { ok, errorMessage } = result;
    if (!ok) return dispatch(logout({ errorMessage }));

    dispatch(login(result));
  };
};
