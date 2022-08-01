import { LoginOutlined, MenuOutlined } from "@mui/icons-material";
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { startLogoutFirebase } from "../../store/auth/thunks";

export const Navbar = ({ drawerWidth }) => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(startLogoutFirebase());
  };
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuOutlined />
        </IconButton>

        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography>JournalApp</Typography>

          <IconButton color="error" onClick={onLogout}>
            <LoginOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
