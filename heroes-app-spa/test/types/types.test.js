import { types } from "../../src/types/types";

describe("test in types", () => {
  test("should return types for reducer", () => {
    const actionTypes = {
      login: "[Auth] Login",
      logout: "[Auth] Logout",
    };

    expect(types).toEqual(actionTypes);
  });
});
