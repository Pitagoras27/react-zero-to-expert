import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Test AddCategory Component', () => {
  const inputValue = "naruto";
  const addCategories = jest.fn();

  test('should set input text with one value', () => {
    render(<AddCategory addCategories={() => {}} />)
    const input = screen.getByRole('textbox');
    fireEvent.input(input, { target: { value: inputValue } });

    expect(input.value).toBe(inputValue);
  })

  test('should clean input text after submit form', () => {
    render(<AddCategory addCategories={() => {}} />)
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');
    
    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form)    
    
    expect(input.value).toBe('');
  })

  test('should call addCategories function with inputValue', () => {
    render(<AddCategory addCategories={addCategories} />)
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    
    expect(addCategories).toHaveBeenCalled();
    expect(addCategories).toHaveBeenCalledWith(inputValue);
    expect(addCategories).toHaveBeenCalledTimes(1);
  })

  test('should no call addCategories function', () => { 
    render(<AddCategory addCategories={addCategories} />)
    const form = screen.getByRole('form');

    fireEvent.submit(form);

    expect(addCategories).not.toHaveBeenCalled();
    expect(addCategories).toHaveBeenCalledTimes(0);
  });
})