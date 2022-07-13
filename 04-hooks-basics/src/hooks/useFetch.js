import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [getQuote, setGetQuote] = useState({
    data: null,
    loading: true,
    hasError: null
  })

  const getData = async () => {
    try {
      /**
      * ! review this updated state!
      */
      setGetQuote({
        data: '',
        loading: true,
        hasError: ''
      });

      const req = await fetch(url);
      const data = await req.json();

      setGetQuote({
        data,
        loading: false,
        hasError: ''
      });
    } catch (error) {
      console.error(error)
      setGetQuote({
        data: null,
        loading: false,
        hasError: 'Occur an error, try later!'
      });
    }

  }

  useEffect(() => {
    getData();
  
  }, [url])
  
  return {
    ...getQuote
  }
}