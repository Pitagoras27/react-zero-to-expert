import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { PublicRoutes } from "../../src/router/PublicRoutes";

describe("test of public routes", () => {
  test("should show children if user not logged", () => {
    const user = {
      logged: false,
    };

    render(
      <AuthContext.Provider value={user}>
        <PublicRoutes>
          (<h1>Children element is public route</h1>)
        </PublicRoutes>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Children element is public route")).toBeTruthy();
  });

  test("should redirect with routed when user is logged", () => {
    const userLogged = {
      logged: true,
      user: {
        name: "Carlos",
        id: "123avc",
      },
    };

    render(
      <AuthContext.Provider value={userLogged}>
        <MemoryRouter initialEntries={["/login"]}>
          <Routes>
            <Route
              path="/login"
              element={
                <PublicRoutes>
                  (<h1>Public route</h1>)
                </PublicRoutes>
              }
            />
            <Route path="marvel" element={<h1>Pagina de Marvel</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.getByText("Pagina de Marvel")).toBeTruthy();
  });
});
