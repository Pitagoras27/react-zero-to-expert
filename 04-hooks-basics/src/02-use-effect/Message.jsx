import { useEffect, useState } from "react";

export const Message = () => {
  const [coords, setCoords] = useState({x: 0, y: 0});

  useEffect(() => {
    const coords = ({ x, y }) => setCoords({ x, y })
    window.addEventListener('mousemove', coords)

    return () => {
      window.removeEventListener('mousemove', coords);
    }
  }, [])
  
  return (
    <>
      <h3>User already exists!</h3>
      <p>{JSON.stringify(coords)}</p>
    </>
  )
}