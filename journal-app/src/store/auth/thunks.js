import {
  loginWithEmailPassword,
  logoutFirebase,
  registerUserWithEmailPassword,
  singWithGoogle,
} from "../../firebase/providers";
import { clearNotesWhenLogout } from "../journal";
import { checkingCredentials, login, logout } from "./authSlide";

export const checkingAuthentication = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startSigningWithGoogle = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await singWithGoogle();
    const { ok, errorMessage } = result;

    if (!ok) return dispatch(logout({ errorMessage }));

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

export const startLoginWithEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await loginWithEmailPassword({ email, password });
    const { ok, errorMessage } = result;

    if (!ok) return dispatch(logout({ errorMessage }));

    dispatch(login(result));
  };
};

export const startLogoutFirebase = () => {
  return async (dispatch) => {
    await logoutFirebase();
    dispatch(clearNotesWhenLogout());
    dispatch(logout({ errorMessage: null }));
  };
};
