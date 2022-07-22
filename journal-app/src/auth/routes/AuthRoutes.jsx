import { Navigate, Route, Router } from "react-router-dom";
import { Login, Register } from "../pages";

export const AuthRoutes = () => {
  return (
    <Router>
      <Route path="auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />

      <Route path="/*" element={<Navigate to="/" element={<Login />} />} />
    </Router>
  );
};
