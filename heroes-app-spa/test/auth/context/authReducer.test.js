import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/types/types";

describe("test in authReducer", () => {
  // ! Review if this test is correct
  test("should return default state", () => {
    const initialState = authReducer({}, {});
    expect(initialState).toEqual({});
  });

  test("should logged and get user name", () => {
    const actionType = {
      type: types.login,
      payload: {
        name: "Carlos",
        id: "abc",
      },
    };

    const loggedState = { user: actionType.payload, logged: true };
    const loginAction = authReducer({}, actionType);

    expect(loginAction).toEqual(loggedState);
    expect(loginAction.user.name).toBe(actionType.payload.name);
  });

  test("should logout and set user null", () => {
    const actionType = {
      type: types.logout,
    };

    const state = {
      logged: true,
      user: {
        name: "carlos",
        id: "abc",
      },
    };

    const logoutAction = authReducer(state, actionType);

    expect(logoutAction).toEqual({
      logged: false,
    });
  });
});
