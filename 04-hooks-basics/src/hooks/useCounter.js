import { useState } from "react";

export const useCounter = (initialState = 10) => {
        const [counter, setCounter] = useState(initialState);

        /**
         * ? Is best update state with callback, because setCounter is asyncronous */
        const increment = (value = 1) => {
                setCounter((prev) => prev + value);
        };

        const reset = () => {
                setCounter(initialState);
        };
        const decrement = (value = 1) => {
                if (counter === 0) return;
                setCounter(counter - value);
        };

        return {
                counter,
                increment,
                reset,
                decrement,
        };
};
