import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../Auth";
import { CalendarPage } from "../Calendar";
import { useAuthStore } from "../hooks";

export const RouterApp = () => {
  const { status, checkAuthToken } = useAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, [])

  if(status === 'checking') {
    return <h3>Loading</h3>
  }

  return (
    <Routes>
      {
        status === 'not-authenticated'
          ? 
            (
              <>
                <Route path='/auth/*' element={<LoginPage /> } />
                <Route path='/*' element={<Navigate to='/auth/login' /> } />
              </>
            )
          :
            (
              <>
                <Route path='/' element={<CalendarPage />} />
                <Route path='/*' element={<Navigate to='/' /> } />
              </>
            )
      }
      {/* <Route path='/*' element={<Navigate to='/auth/login' /> } /> */}
    </Routes>
  )
}