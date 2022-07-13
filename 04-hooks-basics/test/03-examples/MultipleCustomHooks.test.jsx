import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useCounter } from "../../src/hooks/useCounter";
import { useFetch } from "../../src/hooks/useFetch";

jest.mock("../../src/hooks/useCounter");
jest.mock("../../src/hooks/useFetch");

describe("test MultipleCustomHook", () => {
  const mockIncrement = jest.fn();

  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should render component", () => {
    // TODO: Test class of loading
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    expect(screen.getByText("BreakingBad Quotes"));

    const nextButton = screen.getByRole("button", { name: "Next" });
    expect(nextButton.disabled).toBeTruthy();
  });

  test("should useFetch return values", () => {
    useFetch.mockReturnValue({
      data: [
        {
          quote: "Call Jessy!",
          author: "Hombre beta Sr. White",
        },
      ],
      loading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    expect(screen.getByText("Call Jessy!"));
    expect(screen.getByText("Hombre beta Sr. White"));
  });

  test("should call increment function when press button `Next`", () => {
    useFetch.mockReturnValue({
      data: [
        {
          quote: "Call Jessy!",
          author: "Hombre beta Sr. White",
        },
      ],
      loading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    fireEvent.click(screen.getByRole("button", { name: "Next" }));

    expect(mockIncrement).toHaveBeenCalled();
  });
});
