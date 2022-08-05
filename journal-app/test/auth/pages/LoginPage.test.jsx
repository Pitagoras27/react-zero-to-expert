import { configureStore } from "@reduxjs/toolkit";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { LoginPage } from "../../../src/auth/pages/LoginPage";
import { authSlice } from "../../../src/store/auth";
import { authNotAutenticatedState } from "../../fixtures/authFixtures";

// ! Completely mandatory name this mock function with `mock` prefix
const mockStartSigningWithGoogle = jest.fn();
const mockStartLoginWithEmailPassword = jest.fn();

jest.mock("../../../src/store/auth/thunks", () => ({
  startSigningWithGoogle: () => mockStartSigningWithGoogle,
  startLoginWithEmailPassword: ({ email, password }) => () => mockStartLoginWithEmailPassword({email, password})
})); 

// ! Tecnique for replacement useDispatch implementation only
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => (fn) => fn(),
}));

// ? An optional initial state value, very usefull for this test
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
  preloadedState: {
    auth: authNotAutenticatedState,
  },
});

describe("test of Login Component", () => {

  beforeEach(() => jest.clearAllMocks());

  test("should render component LoginPage", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getAllByText("Login").length).toBeGreaterThanOrEqual(1);
  });

  test("should call startSigningWithGoogle action creator when call onGoogleOnSingIn function", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    const googleBtn = screen.getByLabelText("google-sign-in-button");
    // ? Initial state of aplication has disable this button,
    // ? but we can change this state with preloadedState
    fireEvent.click(googleBtn);

    expect(mockStartSigningWithGoogle).toHaveBeenCalled();
  });

  test('should dispatch startLoginWithEmailPassword when press submit button', () => {
    const email = 'demo@google.com';
    const password = 'abc123';

    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    const emailField = screen.getByRole('textbox', { name: 'Correo' });
    fireEvent.change(emailField, { target: { name: 'email', value: email }})

    const passwordField = screen.getByTestId('password', { name: 'Password' });
    fireEvent.change(passwordField, { target: { name: 'password', value: password }})

    const loginForm = screen.getByLabelText('submit-form');
    fireEvent.submit( loginForm );

    expect( mockStartLoginWithEmailPassword ).toHaveBeenCalledWith({
      email,
      password
    });
  });

});
