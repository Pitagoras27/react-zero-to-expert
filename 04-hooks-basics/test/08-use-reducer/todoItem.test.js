import { render, screen } from "@testing-library/react";

import { TodoItem } from "../../src/07-use-reducer/TodoItem";

describe("test of todoItem component", () => {
  const todo = {
    id: 1,
    description: "Learn jest unit test",
    done: false,
  };

  const onRemoveItemMock = jest.fn();
  const onToggleItemMock = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test("should render todoItem with all props", () => {
    render(
      <TodoItem
        todo={todo}
        onDone={onToggleItemMock}
        onDelete={onRemoveItemMock}
      />
    );

    const divElement = screen.getByRole("item-todo");
    const spanElement = screen.getByLabelText("span");

    expect(divElement.className).toBe("flex-container mt-2");
    expect(spanElement.className).toContain("align-self-center");
  });
});
