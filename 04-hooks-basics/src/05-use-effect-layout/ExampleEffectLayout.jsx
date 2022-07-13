import { Blockquote, Loading } from "../03-examples";
import { useCounter, useFetch } from "../hooks";

export const ExampleEffectLayout = () => {
    const { counter, increment } = useCounter(1);
    const { data, loading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { quote, author } = !!data && data[0];
  
    return (
      <div className="container mt-5">
        <h1>BreakingBad Quotes</h1>
        <hr />
  
        {
          loading
            ? (<Loading />)
            : (<Blockquote quote={quote} author={author} />)
        }
  
        <button
          type="button"
          className="btn btn-info"
          disabled={loading}
          onClick={() => increment()}>
            Next
        </button>
  
      </div>
  )
}