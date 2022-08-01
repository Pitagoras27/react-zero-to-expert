import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const singWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    // const credentials = GoogleAuthProvider.credentialFromResult(result);
    const { displayName, email, photoURL, uid } = result.user;

    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;

    return {
      ok: false,
      errorMessage,
      errorCode,
    };
  }
};

export const registerUserWithEmailPassword = async ({
  displayName,
  email,
  password,
}) => {
  try {
    const response = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { uid, photoURL } = response.user;
    await updateProfile(FirebaseAuth.currentUser, { displayName });

    return {
      ok: true,
      displayName,
      email,
      uid,
      photoURL,
      errorMessage: null,
    };
  } catch (error) {
    const errorMessage = error.message;
    const errorCode = error.code;
    return {
      ok: false,
      errorMessage,
      errorCode,
    };
  }
};

export const loginWithEmailPassword = async ({ email, password }) => {
  try {
    const result = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );

    const { uid, photoURL, displayName } = result.user;
    return {
      ok: true,
      uid,
      photoURL,
      displayName,
    };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;

    return {
      ok: false,
      errorCode,
      errorMessage,
    };
  }
};

export const logoutFirebase = async () => {
  return await FirebaseAuth.signOut();
};
