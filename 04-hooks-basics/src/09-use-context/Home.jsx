import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const Home = () => {
  const { user } = useContext(UserContext)
  return (
    <>
      <h2>Home</h2>
      <code aria-label="pre">
        {user?.id &&` Bienvenido! ${JSON.stringify(user?.name)} tu identificador es ${user?.id}`}
      </code>
    </>
  )
}