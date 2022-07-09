import PropTypes from "prop-types";
import { useState } from "react";

// * Why isn't good practice use function state to update list of categories in father?
export const AddCategory = ({ addCategories }) => {
  const [inputValue, setInputValue] = useState('');

  const onAddValue = ({ target }) => {
    setInputValue(target.value)
  }

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if(inputValue.trim().length <= 1) return;
    const lowerCaseValue = inputValue.trim().toLowerCase();
    addCategories(lowerCaseValue)
    setInputValue('');
  }
  return (
    <form onSubmit={onHandleSubmit} aria-label="form">
      <input
        type="text"
        placeholder="add new category"
        value={inputValue}
        onChange={onAddValue}
      />
    </form>
  )
}

AddCategory.propTypes = {
  addCategories: PropTypes.func.isRequired
}