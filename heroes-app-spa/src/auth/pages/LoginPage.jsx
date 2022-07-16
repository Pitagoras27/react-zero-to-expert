import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();

  const onLogin = () => {
    // ? remember `replace` manage history stack of browser
    navigate("/marvel", { replace: true });
  };

  return (
    <div className="container m-3">
      <h1>Login</h1>
      <hr />
      <button className="btn btn-primary" onClick={onLogin}>
        Login
      </button>
    </div>
  );
};
