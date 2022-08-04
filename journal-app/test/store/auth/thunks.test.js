import { singWithGoogle } from "../../../src/firebase/providers";
import {
  checkingCredentials,
  login,
  logout,
} from "../../../src/store/auth/authSlide";
import {
  checkingAuthentication,
  startSigningWithGoogle,
} from "../../../src/store/auth/thunks";
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

  test("should call checking credentials with logout action", async () => {
    const resultWithLogout = { ok: false, errorMessage: "Un error" };
    singWithGoogle.mockResolvedValue(resultWithLogout);

    await startSigningWithGoogle()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(
      logout({ errorMessage: resultWithLogout.errorMessage })
    );
  });
});
