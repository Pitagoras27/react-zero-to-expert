import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth";

export const PrivateRoutes = React.memo(({ children }) => {
  const { search, pathname } = useLocation();
  const path = pathname + search;
  localStorage.setItem("lastPath", path);

  const { logged: isLogged } = useContext(AuthContext);
  return isLogged ? children : <Navigate to="/login" />;
});
