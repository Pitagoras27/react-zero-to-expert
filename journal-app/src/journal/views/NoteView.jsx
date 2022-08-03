import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { setActiveNote } from "../../store/journal/journalSlide";
import { startSavingNote } from "../../store/journal/thunks";
import { ImageGallery } from "../components";

export const NoteView = () => {
  const { activeNote } = useSelector((state) => state.journal);
  const dispath = useDispatch();

  const { title, description, date, handleChange, inputValue } =
    useForm(activeNote);

  const actualDate = useMemo(() => new Date(date).toUTCString(), [date]);

  useEffect(() => {
    dispath(setActiveNote(inputValue));
  }, [inputValue]);

  const onSaveNote = () => {
    dispath(startSavingNote());
  };

  return (
    <Grid
      container
      justifyContent="space-between"
      flexDirection="row"
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          {actualDate}
        </Typography>
      </Grid>

      <Grid item>
        <Button color="primary" sx={{ padding: 2 }} onClick={onSaveNote}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          <Typography>Save</Typography>
        </Button>
      </Grid>

      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese un título"
          label="Título"
          sx={{ border: "none", mb: 1 }}
          name="title"
          value={title}
          onChange={handleChange}
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="What happend today?"
          minRows={5}
          name="description"
          value={description}
          onChange={handleChange}
        />
      </Grid>

      <ImageGallery />
    </Grid>
  );
};
