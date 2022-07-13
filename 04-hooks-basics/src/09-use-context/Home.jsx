import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const Home = () => {
  const { user } = useContext(UserContext)
  return (
    <>
      <h2>Home</h2>
      <code>
        {user?.name &&` Bienvenido! ${JSON.stringify(user?.name)}`}
      </code>
    </>
  )
}