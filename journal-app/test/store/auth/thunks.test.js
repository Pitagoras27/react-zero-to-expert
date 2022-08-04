import {
  loginWithEmailPassword,
  logoutFirebase,
  registerUserWithEmailPassword,
  singWithGoogle,
} from "../../../src/firebase/providers";
import {
  checkingCredentials,
  login,
  logout,
} from "../../../src/store/auth/authSlide";
import {
  checkingAuthentication,
  startCreatingUserWithEmailPassword,
  startLoginWithEmailPassword,
  startLogoutFirebase,
  startSigningWithGoogle,
} from "../../../src/store/auth/thunks";
import { clearNotesWhenLogout } from "../../../src/store/journal";
import { authUserState } from "../../fixtures/authFixtures";

jest.mock("../../../src/firebase/providers");

// ? Other example to complete this type of test:
// ? redux.js.org/usage/writing-tests
describe("test over thunks of authenticated", () => {
  const dispatch = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  // ! Not is easy to understand this test :(
  test("should call checkingCredentials", async () => {
    await checkingAuthentication()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
  });

  test("should call checking credentials and login action", async () => {
    const resultWithLogin = { ok: true, ...authUserState };
    singWithGoogle.mockResolvedValue(resultWithLogin);

    await startSigningWithGoogle()(dispatch);

    expect(dispatch).toBeCalledWith(checkingCredentials());
    expect(dispatch).toBeCalledWith(login(resultWithLogin));
  });

  test("should call checking credentials with logout action with startSigningWithGoogle", async () => {
    const resultWithLogout = { ok: false, errorMessage: "Un error" };
    await singWithGoogle.mockResolvedValue(resultWithLogout);

    await startSigningWithGoogle()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(
      logout({ errorMessage: resultWithLogout.errorMessage })
    );
  });

  test("should call checkingCredentials and login actions in startCreatingUserWithEmailPassword thunk", async () => {
    const formData = {
      displayName: "Carlos",
      email: "elimperio@google.com",
      password: "abc123",
    };
    const successfulRegister = {
      ok: true,
      ...authUserState,
      errorMessage: null,
    };
    await registerUserWithEmailPassword.mockResolvedValue(successfulRegister);

    await startCreatingUserWithEmailPassword(formData)(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(login(successfulRegister));
  });

  test("should call checkingCredentials and login action in startLoginWithEmailPassword thunk", async () => {
    const formData = {
      displayName: "Carlos",
      password: "abc123",
    };
    const successfulRegister = {
      ok: true,
      ...authUserState,
      errorMessage: null,
    };
    await loginWithEmailPassword.mockResolvedValue(successfulRegister);

    await startLoginWithEmailPassword(formData)(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(login(successfulRegister));
  });

  test("should call clearNotesWhenLogout and logout action in startLogoutFirebase thunk", async () => {
    await startLogoutFirebase()(dispatch);

    expect(logoutFirebase).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(clearNotesWhenLogout());
    expect(dispatch).toHaveBeenCalledWith(logout({ errorMessage: null }));
  });
});
