
import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const Login = () => {
  const { user, setUser } = useContext(UserContext)
  return ( 
  <div className="container">
    <code>
      {
        JSON.stringify(user, null, 2)
      }
    </code>
    <button className="btn"
      onClick={() => {
        setUser({
          id: '134',
          name: 'Carlos'
        })
      }}>
          Login User Click!
      </button>
  </div>
  )
}