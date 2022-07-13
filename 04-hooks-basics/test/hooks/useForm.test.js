import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe("test of useForm", () => {
  const initialForm = {
    name: "",
    email: "",
    password: "",
  };
  const nameValue = "Carlos";

  test("should return default values ", () => {
    const { result } = renderHook(() => useForm(initialForm));
    expect(result.current).toEqual({
      inputValue: initialForm,
      name: initialForm.name,
      email: initialForm.email,
      password: initialForm.password,
      handleChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test("should change name value", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { handleChange } = result.current;

    act(() =>
      handleChange({
        target: { name: "name", value: nameValue },
      })
    );

    expect(result.current.name).toBe(nameValue);
    expect(result.current.inputValue).toEqual({
      name: "Carlos",
      email: initialForm.email,
      password: initialForm.password,
    });
  });

  test("should call reset function and set defaul values", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { onResetForm, handleChange } = result.current;

    act(() => {
      handleChange({ target: { name: nameValue } });
      onResetForm();
    });

    expect(result.current.inputValue).toEqual(initialForm);
    expect(result.current.name).toEqual(initialForm.name);
  });
});
