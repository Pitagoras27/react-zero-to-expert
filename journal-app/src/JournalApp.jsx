import { AppRouter } from "./router/AppRouter";
import "./styles.css";
import { AppTheme } from "./theme";

export const JournalApp = () => {
  return (
    <>
      <AppTheme>
        <AppRouter />
      </AppTheme>
    </>
  );
};
