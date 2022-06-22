import PropTypes from 'prop-types';

const CounterApp = ({
  value,
  updateCounter,
  lestCounter: substractCounter,
  handleReset
}) => {

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{value}</h2> 
      <button onClick={updateCounter}>Add 1</button>
      <button onClick={substractCounter}>Lest 1</button>
      <button onClick={handleReset}>Reset</button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number
}

CounterApp.defaultProps = {
  value: 0
}

export default CounterApp;