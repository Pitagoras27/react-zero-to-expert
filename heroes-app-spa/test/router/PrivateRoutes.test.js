import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { PrivateRoutes } from "../../src/router/PrivateRoutes";

describe("tests in PrivateRoutes component", () => {
  test("should show login component if user not authenticate", () => {
    const isLogged = {
      logged: true,
      user: {
        name: "Carlos",
        id: "123avx",
      },
    };

    Storage.prototype.setItem = jest.fn();

    render(
      <AuthContext.Provider value={isLogged}>
        <MemoryRouter initialEntries={["/search"]}>
          <PrivateRoutes>
            <h2>Private route</h2>
          </PrivateRoutes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Private route")).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", "/search");
  });
});
