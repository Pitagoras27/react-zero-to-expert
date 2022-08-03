import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { fileUpload } from "../../helpers/fileUpload";
import { loadNotes } from "../../helpers/loadNotes";
import {
  addNewEmptyNote,
  deleteNoteById,
  savingNote,
  setActiveNote,
  setActiveNoteWithImgsUrls,
  setNotes,
  setSavingUpdateNote,
  updateNote,
} from "./journalSlide";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    dispatch(savingNote());

    const newNote = {
      title: "",
      description: "",
      imageUrls: [],
      date: new Date().getTime(),
    };

    const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
    await setDoc(newDoc, newNote);

    newNote.id = newDoc.id;

    dispatch(addNewEmptyNote(newNote));
    dispatch(setActiveNote(newNote));
  };
};

export const startLoadingNotes = () => {
  return async (dispatch, getStore) => {
    const { uid } = getStore().auth;

    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  };
};

export const startSavingNote = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(setSavingUpdateNote());
      const { uid } = getState().auth;
      const { activeNote, notes } = getState().journal;

      const noteUpdate = { ...activeNote };
      delete noteUpdate.id;

      const docPath = doc(FirebaseDB, `${uid}/journal/notes/${activeNote.id}`);
      await setDoc(docPath, noteUpdate, { merge: true });

      dispatch(updateNote({ activeNote, notes }));
    } catch (error) {
      console.log(error, "<---");
    }
  };
};

export const startUploadingFiles = (files = []) => {
  return async (dispatch) => {
    dispatch(setSavingUpdateNote());

    const fileUploadPromises = [];
    for (const image of files) {
      fileUploadPromises.push(fileUpload(image));
    }

    const images = await Promise.all(fileUploadPromises);
    dispatch(setActiveNoteWithImgsUrls(images));
  };
};

export const startDeleteNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const { activeNote } = getState().journal;

    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${activeNote.id}`);
    await deleteDoc(docRef);

    dispatch(deleteNoteById(activeNote.id));
  };
};
