import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe("test of useCounter", () => {
  test("should render result of hook", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, reset, increment, decrement } = result.current;

    expect(counter).toBe(10);
    expect(reset).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(decrement).toEqual(expect.any(Function));
  });

  test("should counter with initialState value return 100", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;

    expect(counter).toBe(100);
  });

  test("should call increment function and update counter value", () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment } = result.current;

    act(() => {
      increment();
      increment(2);
    });
    /**
     * ? Here is neccesary call counter from result.current */
    expect(result.current.counter).toBe(103);
  });

  test("should call reset and set state with default initial value", () => {
    const { result } = renderHook(() => useCounter());
    const { reset, increment } = result.current;

    act(() => {
      increment();
      reset();
    });

    expect(result.current.counter).toBe(10);
  });
});
