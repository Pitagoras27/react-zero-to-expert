import { useEffect } from "react";
import Swal from "sweetalert2";
import { useAuthStore, useForm } from "../../hooks";
import "./loginPage.css";

const loginValues = {
  loginEmail: "",
  loginPassword: ""
}

const registerValues = {
  registerName: "",
  registerEmail: "",
  registerPassword: "",
  registerPassword2: ""
}

export const LoginPage = () => {
  const { loginEmail, loginPassword, onInputChange:onLoginInputChange } = useForm(loginValues);
  const {
    registerName,
    registerEmail,
    registerPassword,
    registerPassword2,
    onInputChange:onRegisterInputChange
  } = useForm(registerValues);
  const { startLoginUser, startUserRegister, errorMessage } = useAuthStore();

  useEffect(() => {
    if(errorMessage !== undefined) {
      Swal.fire({
        icon: "error",
        title: errorMessage,
        text: "Try again",
      });
    }

  }, [errorMessage])
  
  const onLoginSubmit = (e) => {
    e.preventDefault();
    console.log({ loginEmail, loginPassword });
    startLoginUser({ email: loginEmail, password: loginPassword });
  }

  const onRegisterSubmit = (e) => {
    e.preventDefault();
    const userRegister = {
      name: registerName,
      email: registerEmail,
      password: registerPassword,
      password2: registerPassword2
    }
    startUserRegister(userRegister);
    
  }

  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-6 login-form-1">
          <h3>Ingreso</h3>
          <form onSubmit={onLoginSubmit} aria-label="login-form">
            <div className="form-group mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Correo"
                name="loginEmail"
                value={loginEmail}
                onChange={onLoginInputChange}
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="loginPassword"
                value={loginPassword}
                onChange={onLoginInputChange}
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="submit"
                className="btnSubmit"
                value="Login"
              />
            </div>
          </form>
        </div>

        <div className="col-md-6 login-form-2">
          <h3>Registro</h3>
          <form onSubmit={onRegisterSubmit} aria-label="register-form">
            <div className="form-group mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="registerName"
                aria-label="register-user-name"
                value={registerName}
                onChange={onRegisterInputChange}
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="email"
                className="form-control"
                placeholder="Correo"
                name="registerEmail"
                aria-label="register-user-email"
                value={registerEmail}
                onChange={onRegisterInputChange}
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="registerPassword"
                aria-label="password-register"
                value={registerPassword}
                onChange={onRegisterInputChange}
              />
            </div>

            <div className="form-group mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Repita la contraseña"
                name="registerPassword2"
                aria-label="password-confirm"
                value={registerPassword2}
                onChange={onRegisterInputChange}
              />
            </div>

            <div className="form-group mb-2">
              <input type="submit" className="btnSubmit" value="Crear cuenta" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
