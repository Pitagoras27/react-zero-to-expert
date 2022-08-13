import { useDispatch, useSelector } from "react-redux";
import { calendarApi } from "../api";
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store/auth/authSlice";

export const useAuthStore = () => {
  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector(state => state.auth);

  const onLoginUser = async({ email, password }) => {
    dispatch(onChecking());
    try {
      const { data } = await calendarApi.post('/auth', { email, password });
      const { name, uid, token } = data;

      localStorage.setItem('token', token);
      localStorage.setItem('token-init-date', Date.now());
      dispatch(onLogin({ name, uid }));
    } catch (error) {
        dispatch(onLogout('Incorrect credentials'));
        setTimeout(() => {
          dispatch(clearErrorMessage());
        }, 10)
      
    }
  }

  return {
    onLoginUser,
    status,
    errorMessage
  }
}