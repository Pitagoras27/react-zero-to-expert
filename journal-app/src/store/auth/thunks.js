import { singWithGoogle } from "../../firebase/providers";
import { checkingCredentials } from "./authSlide";

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const isSigningWithGoogle = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await singWithGoogle();
    console.log({ result });
  };
};
