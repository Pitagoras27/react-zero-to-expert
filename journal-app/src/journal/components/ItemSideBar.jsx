import { TurnedInNot } from "@mui/icons-material";
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../store/journal/journalSlide";

export const ItemSideBar = ({
  date,
  description,
  id,
  title,
  imageUrls = [],
}) => {
  const dispatch = useDispatch();
  const setLongMaxTitle = useMemo(() => {
    return title.length > 18 ? title.substring(0, 18) + "..." : title;
  }, [title]);

  const onClickNote = (e) => {
    dispatch(setActiveNote({ title, description, date, imageUrls }));
  };

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={() => onClickNote(id)}>
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
