import { useDispatch, useSelector } from "react-redux";
import { calendarApi } from "../api";

export const useAuthStore = () => {
  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector(state => state.auth);

  const onLoginUser = async({ email, password }) => {
    const reqLogin = await calendarApi.post('/auth', { email, password });
    console.log(reqLogin);
    // dispatch(onLogin({ email, password }))
  }

  return {
    onLoginUser,
    status,
    errorMessage
  }
}