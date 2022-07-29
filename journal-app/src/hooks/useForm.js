import { useEffect, useState } from "react";

export const useForm = (initialState, validatedFields = {}) => {
  const [inputValue, setInputValue] = useState(initialState);
  const [validationValues, setValidationValues] = useState({});

  useEffect(() => {
    validationFields();
  }, [inputValue]);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setInputValue(initialState);
  };

  const validationFields = () => {
    const helper = {};

    for (let field of Object.keys(validatedFields)) {
      const [fn, errorMessage] = validatedFields[field];
      helper[`${field}Valid`] = fn(inputValue[field]) ? errorMessage : null;
    }

    setValidationValues(helper);
  };

  return {
    inputValue,
    ...inputValue,
    ...validationValues,
    validationValues,
    handleChange,
    onResetForm,
  };
};
