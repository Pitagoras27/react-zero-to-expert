import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth";

export const PublicRoutes = ({ children }) => {
  const { logged: isLogged } = useContext(AuthContext);
  return isLogged ? <Navigate to="/marvel" /> : children;
};
