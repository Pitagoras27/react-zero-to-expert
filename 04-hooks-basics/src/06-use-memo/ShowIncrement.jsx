import { useState } from "react";
import { useCounter } from "../hooks/useCounter";
import { Small } from "./Small";

const heavyStuff = (iterationNumber) => {
  for (let i = 0; i < iterationNumber; i++){
      console.log('iteratiossn');
    }
    return `total iteration result = ${iterationNumber}`
}

export const ShowIncrement = () => {
  const { counter, increment } = useCounter();
  const [ show, setShow ] = useState(true)

  const memorizeValue = useMemo(() => heavyStuff(counter), [counter])

  return (
    <div className="container">
      <h1>
        ShowIncrement: {<Small counter={counter} />}
      </h1>
      <hr />
      <h2>{memorizeValue}</h2>
      {/* {heavyStuff(counter)} */}
      <button 
        className=""
        onClick={() => { increment(500)}} >Increment one
      </button>

      <button
        className="btn btn-outline-primary"
        onClick={ () => setShow( !show )  }
      >
        Show/Hide { JSON.stringify(show) } 
      </button>
    </div>
  )
}