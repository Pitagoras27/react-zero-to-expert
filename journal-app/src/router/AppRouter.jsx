import { Route, Router } from "react-router-dom";
import { AuthRoutes } from "../auth";
import { JournalRoutes } from "../journal";

export const AppRouter = () => {
  return (
    <Router>
      <Route to="/auth" element={<AuthRoutes />} />

      <Route to="/" element={<JournalRoutes />} />
    </Router>
  );
};
