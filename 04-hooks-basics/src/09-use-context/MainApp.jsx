import { Navigate, Route, Routes } from "react-router";
import { About, Contact, Home, Login, Nav } from "./";
import { UserProvider } from "./context/UserProvider";

export const MainApp = () => {
  return (
    <UserProvider>
      <div className="container mt-5">
        <Nav />
        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Navigate to="./" />} />
        </Routes>
      </div>
    </UserProvider>
  );
};
