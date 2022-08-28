import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-use-context/context/UserContext";
import { Login } from "../../src/09-use-context/Login";

describe("Test for Login component", () => {
  test("should render login without interactions", () => {
    render(
      <UserContext.Provider
        value={{
          user: null,
        }}
      >
        <Login />;
      </UserContext.Provider>
    );
    const codeTag = screen.getByLabelText("code");
    // ? to evaluate expect with null, this should pass as string
    expect(codeTag.innerHTML).toBe("null");
  });

  test("should call setUser function with object user", () => {
    const user = { id: 134, name: "Carlos" };
    const setUser = jest.fn();
    // ? Is necessary pass setUser function to UserContext provider to work properly
    // ? The other hand don't work
    render(
      <UserContext.Provider value={{ user: "null", setUser }}>
        <Login />
      </UserContext.Provider>
    );
    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(setUser).toHaveBeenCalledWith({ id: user.id.toString(), name: user.name });
  });
});
