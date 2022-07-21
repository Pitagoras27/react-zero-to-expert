import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { AppRouter } from "../../src/router/AppRouter";

describe("test in AppRoute component", () => {
  test("should show login if user in not authenticate", () => {
    const user = {
      logged: false,
    };
    render(
      <MemoryRouter initialEntries={["/marvel"]}>
        <AuthContext.Provider value={user}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );
    expect(screen.getAllByText("Login")).toBeTruthy();
  });

  test("should show marvel page if user is authenticate", () => {
    const user = {
      logged: true,
      user: {
        name: "Carlos",
        id: "123abc",
      },
    };

    render(
      <MemoryRouter initialEntries={["/marvel"]}>
        <AuthContext.Provider value={user}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", { level: 1 })).toBeTruthy();
  });
});
