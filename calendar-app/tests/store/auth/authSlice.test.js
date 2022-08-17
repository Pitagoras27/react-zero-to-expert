import { authSlice, onChecking, onLogin, onLogout } from "../../../src/store/auth/authSlice";
import { authInitialState, authLoginState, authLogoutState } from "../../fixtures/authStates";
import { userTest } from "../../fixtures/testUser";

describe('Test authSlice', () => {
  test('should return initial state', () => {
    const initialState = {
      status: 'checking',
      user: {},
      errorMessage: undefined
    }

    expect(authSlice.getInitialState()).toEqual(initialState);
  });

  test('should change global state when onLogin reducer is call', () => {
    const loginState = authSlice.reducer(authInitialState, onLogin(userTest));

    expect(loginState).toEqual(authLoginState);
  });

  test('should get initial state, before to access to calendar app', () => {
    const checkingState = authSlice.reducer(authInitialState, onChecking());

    expect(checkingState).toEqual(authInitialState);
  });

  test('should change global state when onLogout reducer is call', () => {
    const logoutState = authSlice.reducer(authLoginState, onLogout());

    expect(logoutState).toEqual(authLogoutState);
  });

  test('should change global state when onLogout reducer is call', () => {
    const logoutState = authSlice.reducer(authLoginState, onLogout());

    expect(logoutState).toEqual(authLogoutState);
  });

  test('should clean global state when onLogout reducer is call', () => {
    const invalidCredentials = 'Invalid credentials';
    const errorMessageState = authSlice.reducer(authLoginState, onLogout(invalidCredentials));

    expect(errorMessageState).toEqual({
      status: 'not-authenticated',
      user: {},
      errorMessage: invalidCredentials
    });
  });
})