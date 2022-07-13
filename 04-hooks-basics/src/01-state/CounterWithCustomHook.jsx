import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const {counter, increment, reset, decrement} = useCounter();
  return (
    <>
      <h1>Counter is: {counter}</h1>

      <button className="btn btn-primary m-2" onClick={() => increment(2)}>+1</button>
      <button className="btn btn-primary m-2" onClick={reset}>reset</button>
      <button className="btn btn-primary m-2" onClick={() => decrement(2)}>-1</button>
    </>


  )
}