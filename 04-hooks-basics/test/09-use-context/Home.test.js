import { render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-use-context/context/UserContext";
import { Home } from "../../src/09-use-context/Home";

describe("Test for Home component", () => {
  const user = {
    id: 134,
    name: "Carlos",
  };

  test("should not render user", () => {
    render(
      <UserContext.Provider
        value={{
          user: null,
        }}
      >
        <Home />
      </UserContext.Provider>
    );
    const codeTag = screen.getByLabelText("pre");
    expect(codeTag.innerHTML).toBe("");
  });

  test("should not render user", () => {
    render(
      <UserContext.Provider
        value={{
          user,
        }}
      >
        <Home />
      </UserContext.Provider>
    );
    const codeTag = screen.getByLabelText("pre");
    expect(codeTag.innerHTML).toContain(user.name);
    // ? template strings access value of objet as string
    // ? Other way is use toString() method
    expect(codeTag.innerHTML).toContain(`${user.id}`);
  });
});
