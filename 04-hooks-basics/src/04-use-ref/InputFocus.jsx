import { useRef } from "react";


export const InputFocus = () => {
  // let inputRef = '';
  const inputRef = useRef();

  const onInputClick = () => {
    inputRef.current.select();
    console.log(inputRef)
  }

  return (
    <div className='container mt-5'>
      <h1>Use Ref example</h1>

      <input 
        type='text'
        // ref={(element) => inputRef = element }
        ref={inputRef}
      />

      <br />
      <button
        className='btn btn-info mt-2'
        onClick={() => onInputClick()}
      >Click establish focus in input element</button>
    </div>
  )
}