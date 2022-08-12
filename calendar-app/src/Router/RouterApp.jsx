import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../Auth";
import { CalendarPage } from "../Calendar";

export const RouterApp = () => {
  const status = 'not-authenticated';
  return (
    <Routes>
      {
        status === 'not-authenticated'
          ? <Route path='/auth/*' element={<LoginPage /> } />
          : <Route path='/*' element={<CalendarPage />} />
      }
      <Route path='/*' element={<Navigate to='/auth/login' /> } />
    </Routes>
  )
}