import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/07-use-reducer/TodoApp";
import { useTodo } from "../../src/hooks/useTodo.jsx";

jest.mock("../../src/hooks/useTodo.jsx");

describe("test for component TodoApp", () => {
  useTodo.mockReturnValue({
    todoApp: [
      {
        id: 1,
        description: "Todo #1",
        done: false,
      },
      {
        id: 2,
        description: "Todo #2",
        done: false,
      },
    ],
    handleAdd: jest.fn(),
    handleDone: jest.fn(),
    handleDelete: jest.fn(),
  });

  beforeEach(() => jest.clearAllMocks());

  test("should render component Todo with info description", () => {
    render(<TodoApp />);

    expect(screen.getByText("Todo #1")).toBeTruthy();
    expect(screen.getByText("Todo #2")).toBeTruthy();
  });
});
