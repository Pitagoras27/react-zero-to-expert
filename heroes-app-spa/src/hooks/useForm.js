import { useState } from "react";

export const useForm = (initialState) => {
  const [inputValue, setInputValue] = useState(initialState);

  const onChange = ({ target }) => {
    const { name, value } = target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setInputValue(initialState);
  };

  return {
    inputValue,
    ...inputValue,
    onChange,
    onResetForm,
  };
};
