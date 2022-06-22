import { useState } from "react";

const initialState = 21;

export const useCounter = () => {
  const [count, setCount] = useState(initialState);

  const handleAdd = () => setCount( prev => prev + 1 );

  const handleSubstract = () => setCount( prev => prev - 1 );

  const handleReset = () => setCount(initialState);

  return {
    count,
    handleAdd,
    handleSubstract,
    handleReset
  }
}