import {
  authSlice,
  checkingCredentials,
  login,
  logout,
} from "../../../src/store/auth/authSlide";
import {
  authAutenticatedState,
  authCheckingCredentialsState,
  authInitialState,
  authNotAutenticatedState,
} from "../../fixtures/authFixtures";

// ? Review other strategies in: https://redux.js.org/usage/writing-tests
describe("test authSlide reducer", () => {
  test("should set initial state", () => {
    /**
     * @reducer
     * @param authInitialState state
     * @param object actionCreator
     */
    const state = authSlice.reducer(authInitialState, {});

    expect(state).toEqual(authInitialState);
    expect(authSlice.name).toBe("auth");
  });

  test("should state autehticated when user is logued", () => {
    const state = authSlice.reducer(
      authInitialState,
      login(authAutenticatedState)
    );

    expect(state).toEqual(authAutenticatedState);
  });

  test("should logout with errorMessage is null", () => {
    const state = authSlice.reducer(
      authAutenticatedState,
      logout({ errorMessage: null })
    );

    expect(state).toEqual(authNotAutenticatedState);
  });

  test("should logout with errorMessage with explanation", () => {
    const errorMessage = "Error's credentials";
    const state = authSlice.reducer(
      authAutenticatedState,
      logout({ errorMessage })
    );

    expect(state).toEqual({
      status: authNotAutenticatedState.status,
      uid: authNotAutenticatedState.uid,
      email: authNotAutenticatedState.email,
      displayName: authNotAutenticatedState.displayName,
      photoURL: authNotAutenticatedState.photoURL,
      errorMessage,
    });
  });

  test("should change state from `authenticated` to `checking`", () => {
    const state = authSlice.reducer(
      authAutenticatedState,
      checkingCredentials()
    );
    expect(state.status).toBe(authCheckingCredentialsState.status);
  });
});
