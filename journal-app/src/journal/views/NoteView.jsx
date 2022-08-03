import { SaveOutlined, UploadFileOutlined } from "@mui/icons-material";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import { useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import { useForm } from "../../hooks/useForm";
import { setActiveNote } from "../../store/journal/journalSlide";
import {
  startSavingNote,
  startUploadingFiles,
} from "../../store/journal/thunks";
import { ImageGallery } from "../components";

export const NoteView = () => {
  const { activeNote, messageSaved, isSaving } = useSelector(
    (state) => state.journal
  );

  const inputFile = useRef();
  const dispath = useDispatch();

  const { title, description, date, handleChange, inputValue } =
    useForm(activeNote);

  const actualDate = useMemo(() => new Date(date).toUTCString(), [date]);

  useEffect(() => {
    dispath(setActiveNote(inputValue));
  }, [inputValue]);

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire("Updated note", messageSaved, "success");
    }
  }, [messageSaved]);

  const onSaveNote = () => {
    dispath(startSavingNote());
  };

  const onFileInputChange = ({ target }) => {
    if (target.files.length === 0) return;
    dispath(startUploadingFiles(target.files));
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
        <input
          type="file"
          multiple
          onChange={onFileInputChange}
          ref={inputFile}
          style={{ display: "none" }}
        />

        <IconButton
          color="primary"
          disabled={isSaving}
          onClick={() => inputFile.current.click()}
        >
          <UploadFileOutlined />
        </IconButton>
      </Grid>

      <Grid item>
        <Button
          color="primary"
          sx={{ padding: 2 }}
          onClick={onSaveNote}
          disabled={isSaving}
        >
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

      <ImageGallery imageUrls={activeNote.imageUrls} />
    </Grid>
  );
};
