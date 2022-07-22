import { Route, Router } from "react-router-dom";
import { JournalApp } from "/";

export const JournalRoutes = () => {
  return (
    <Router>
      <Route to="/journalPage" element={<JournalApp />} />
    </Router>
  );
};
