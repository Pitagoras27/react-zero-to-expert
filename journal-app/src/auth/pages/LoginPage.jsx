import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { checkingAuthentication, isSigningWithGoogle } from "../../store/auth";
import { AuthLayout } from "../layout/AuthLayout";

export const LoginPage = () => {
  const { email, password, handleChange } = useForm({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(checkingAuthentication());
  };

  const onGoogleOnSingIn = () => {
    dispatch(isSigningWithGoogle());
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>
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

        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
          <Grid item xs={12} sm={6}>
            <Button type="submit" variant="contained" fullWidth>
              Login
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button onClick={onGoogleOnSingIn} variant="contained" fullWidth>
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
