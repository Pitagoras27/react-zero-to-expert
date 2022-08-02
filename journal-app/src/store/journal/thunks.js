import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { loadNotes } from "../../helpers/loadNotes";
import {
  addNewEmptyNote,
  savingNote,
  setActiveNote,
  setNotes,
} from "./journalSlide";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    dispatch(savingNote());

    const newNote = {
      title: "",
      description: "",
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
