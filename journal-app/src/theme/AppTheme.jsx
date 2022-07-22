import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { themePurple } from "./";

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={themePurple}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
