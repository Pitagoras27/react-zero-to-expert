import { TurnedInNot } from "@mui/icons-material";
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useMemo } from "react";

export const ItemSideBar = ({ title, description }) => {
  const setLongMaxTitle = useMemo(() => {
    return title.length > 18 ? title.substring(0, 18) + "..." : title;
  }, [title]);

  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={setLongMaxTitle} />
          <ListItemText secondary={description} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
