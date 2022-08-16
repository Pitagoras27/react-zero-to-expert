import { useDispatch, useSelector } from "react-redux";
import { calendarApi } from "../api";
import { setLocalStorage } from "../helpers";
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store/auth/authSlice";
import { onLogoutCalendar } from "../store/calendar/calendarSlice";

export const useAuthStore = () => {
  const dispatch = useDispatch();
  const { status, user, errorMessage } = useSelector(state => state.auth);

  const startLoginUser = async({ email, password }) => {
    dispatch(onChecking());
    try {
      const { data } = await calendarApi.post('/auth', { email, password });
      const { name, uid, token } = data;

      setLocalStorage(token);
      dispatch(onLogin({ name, uid }));
    } catch (error) {
        dispatch(onLogout('Incorrect credentials'));
        setTimeout(() => {
          dispatch(clearErrorMessage());
        }, 10)
      
    }
  }

  const startUserRegister = async({ name, email, password, password2 }) => {
    dispatch(onChecking());
    if(password !== password2) {
      dispatch(onLogout('Password should be equal!'))
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10)
      return; 
    }

    try {
      const { data } = await calendarApi.post('/auth/new', { name, email, password, password2 });
      const { uid, token } = data;
      dispatch(onLogin({ name, uid }));
      setLocalStorage(token);
      
    } catch (error) {
      const { msg } = error.response.data;
      dispatch(onLogout(msg));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10)
    }
  }

  const checkAuthToken = async() => {
    const token =  localStorage.getItem('token');
    if(!token) {
      dispatch(onLogout());
    }

    try {
      const { data } = await calendarApi.get('/auth/renew');
      const { token, name, uid } = data;

      setLocalStorage(token);
      dispatch(onLogin({ name, uid }));

    } catch (error) {
      localStorage.clear();
      dispatch(onLogout());
    }
  }
  
  const startLogout = () => {
    localStorage.clear();
    dispatch(onLogout());
    dispatch(onLogoutCalendar());
  }

  return {
    startLoginUser,
    startUserRegister,
    checkAuthToken,
    startLogout,
    status,
    errorMessage,
    user
  }
}