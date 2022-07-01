import PropTypes from 'prop-types';
import { useState } from 'react';

// const CounterApp = ({
//   value,
//   updateCounter,
//   lestCounter: substractCounter,
//   handleReset
// }) => {

//   return (
//     <>
//       <h1>CounterApp</h1>
//       <h2>{value}</h2> 
//       <button area-label="+1" onClick={updateCounter}> +1 </button>
//       <button onClick={substractCounter}> -1 </button>
//       <button onClick={handleReset}> Reset </button>
//     </>
//   )
// }

// CounterApp.propTypes = {
//   value: PropTypes.number
// }

// CounterApp.defaultProps = {
//   value: 0
// }

const CounterApp = ({ value }) => {
    
  const [ counter, setCounter ] = useState( value );

  const handleAdd = () => { 
      // console.log(event)
      setCounter( counter + 1 );
      // setCounter( (c) => c + 1 )
  }

  const handleSubstract = () => setCounter( counter - 1 );
  const handleReset = () => setCounter( value );

  return (
      <>
          <h1>CounterApp</h1>
          <h2> { counter } </h2>

          <button onClick={ handleAdd }> +1 </button>
          <button onClick={ handleSubstract }> -1 </button>
          <button aria-label="btn-reset" onClick={ handleReset }> Reset </button>
      </>
  );
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}

export default CounterApp;