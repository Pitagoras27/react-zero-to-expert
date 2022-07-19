import { useState } from "react";

export const useForm = (initialState) => {
  const [searchText, setInputValue] = useState(initialState);

  const onChange = ({ target }) => {
    const { name, value } = target;
    setInputValue({
      ...searchText,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setInputValue(initialState);
  };

  return {
    searchText,
    ...searchText,
    onChange,
    onResetForm,
  };
};
