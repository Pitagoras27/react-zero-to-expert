import {
  Alert,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { startCreatingUserWithEmailPassword } from "../../store/auth";
import { AuthLayout } from "../layout/AuthLayout";

const dataFormRegister = {
  displayName: "",
  email: "",
  password: "",
};

const validatedFields = {
  displayName: [
    (value, b) => !value.length >= 1,
    "The full name don't have empty",
  ],
  email: [(value) => !value.includes("@"), "The email is not valid"],
  password: [
    (value) => !(value.length >= 6),
    "The password must have 6 characters minimun",
  ],
};

export const RegisterPage = () => {
  const dispath = useDispatch();
  const { status, errorMessage } = useSelector((state) => state.auth);
  const {
    inputValue,
    displayName,
    email,
    password,
    handleChange,
    displayNameValid,
    emailValid,
    passwordValid,
    isFormValid,
  } = useForm(dataFormRegister, validatedFields);

  const isAuthenticatedChecking = useMemo(
    () => status === "checking",
    [status]
  );
  const [submitValidation, setSubmitValidation] = useState(false);
  console.log("errorMessage--->", errorMessage);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitValidation(true);

    if (!isFormValid) return;
    dispath(startCreatingUserWithEmailPassword(inputValue));
  };
  return (
    <AuthLayout title="Register">
      {/* <h4>The form is {isFormValid ? "valid" : "incorrect"}</h4> */}
      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Full Name"
              type="text"
              placeholder="Full Name"
              autoComplete="off"
              fullWidth
              value={displayName}
              onChange={handleChange}
              name="displayName"
              error={!!displayNameValid && submitValidation}
              helperText={displayNameValid}
            />
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              autoComplete="off"
              fullWidth
              value={email}
              onChange={handleChange}
              name="email"
              error={!!emailValid && submitValidation}
              helperText={emailValid}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="Password"
              autoComplete="off"
              fullWidth
              value={password}
              onChange={handleChange}
              name="password"
              error={!!passwordValid && submitValidation}
              helperText={passwordValid}
            />
          </Grid>
        </Grid>

        <Grid item xs={12} display={!!errorMessage ? "" : "none"}>
          <Alert severity="error">{errorMessage}</Alert>
        </Grid>

        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              fullWidth
              type="submit"
              disabled={isAuthenticatedChecking}
            >
              <Typography>Register</Typography>
            </Button>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/login">
              <Typography sx={{ mt: 2 }}>You have an Account</Typography>
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
