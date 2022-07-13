import { useLayoutEffect, useRef, useState } from "react";

export const Blockquote = ({ quote, author }) => {
  const refSizeQuote = useRef();
  const [coords, setCoords] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const { width, height } = refSizeQuote.current.getBoundingClientRect();
    setCoords({ width, height });
  }, [quote]);

  return (
    <>
      <blockquote
        className="blockquote blockquote-info text-end"
        style={{ display: "flex" }}
      >
        <p className="mt-2" ref={refSizeQuote}>
          {quote}
        </p>
        <footer className="blockquote-footer">{author}</footer>
      </blockquote>
      <code>{JSON.stringify(coords, null, 4)}</code>
    </>
  );
};
