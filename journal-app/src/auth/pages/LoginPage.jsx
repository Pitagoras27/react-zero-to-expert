import { Google } from "@mui/icons-material";
import {
  Alert,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import {
  startLoginWithEmailPassword,
  startSigningWithGoogle,
} from "../../store/auth";
import { AuthLayout } from "../layout/AuthLayout";

export const LoginPage = () => {
  const { email, password, handleChange } = useForm({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector((state) => state.auth);
  const isAuthenticated = useMemo(() => status === "checking", [status]);

  const onSubmit = (e) => {
    e.preventDefault();
    // dispatch(checkingAuthentication());
    dispatch(startLoginWithEmailPassword({ email, password }));
  };

  const onGoogleOnSingIn = () => {
    dispatch(startSigningWithGoogle());
  };

  return (
    <AuthLayout title="Login">
      <form
        onSubmit={onSubmit}
        className="animate__animated animate__fadeIn animate__faster"
      >
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              name="email"
              type="email"
              value={email}
              placeholder="correo@google.com"
              autoComplete="off"
              onChange={handleChange}
              fullWidth
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              name="password"
              type="password"
              value={password}
              placeholder="Password"
              autoComplete="off"
              onChange={handleChange}
              fullWidth
            />
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{ mb: 2, mt: 1 }}
          display={!!errorMessage ? "" : "none"}
        >
          <Alert severity="error">{errorMessage}</Alert>
        </Grid>

        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
          <Grid item xs={12} sm={6}>
            <Button
              type="submit"
              variant="contained"
              disabled={isAuthenticated}
              fullWidth
            >
              Login
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              onClick={onGoogleOnSingIn}
              variant="contained"
              disabled={isAuthenticated}
              fullWidth
            >
              <Google />
              <Typography sx={{ ml: 1 }}>Google</Typography>
            </Button>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              <Typography sx={{ mt: 2 }}>Create Account</Typography>
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
