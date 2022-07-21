import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../../src/auth";
import { Navbar } from "../../../src/ui/components";

// ? This is form to mocked one feature of library and test your call properly
const mockUseNavigate = jest.fn();

// ? Mock of complete library
jest.mock("react-router-dom", () => ({
  // ? spreed all fucntions of library without overwrite
  ...jest.requireActual("react-router-dom"),
  // ? Overwrite useNavigate method for mockFn
  useNavigate: () => mockUseNavigate,
}));

describe("test in Navbar component", () => {
  const user = {
    logged: true,
    user: {
      name: "Carlos",
      id: "abc1234",
    },
    logout: jest.fn(),
  };

  beforeEach(() => jest.clearAllMocks());

  test("should show name user in Navbar component", () => {
    render(
      <MemoryRouter>
        <AuthContext.Provider value={user}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );
    expect(screen.getByText("Carlos")).toBeTruthy();
  });

  test("should call logout function and redirect to login page", () => {
    render(
      <MemoryRouter>
        <AuthContext.Provider value={user}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);

    // ? Doesn't call function if this not belong to context
    expect(user.logout).toHaveBeenCalled();
    expect(mockUseNavigate).toHaveBeenCalled();
  });
});
