import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../Auth";
import { CalendarPage } from "../Calendar";

export const RouterApp = () => {
  const isAuthenticated = false;
  return (
    <Routes>
      {
        isAuthenticated
          ? <Route path='/*' element={<CalendarPage />} />
          : <Route path='/auth/*' element={<LoginPage /> } />
      }
      <Route path='/*' element={<Navigate to='/auth/login' /> } />
    </Routes>
  )
}