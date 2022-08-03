import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    isSaving: false,
    messageSaved: "",
    notes: [],
    activeNote: null, // {}
    // activeNote: {
    //   title: "",
    //   body: "",
    //   date: new Date().getTime()
    //   imageUrls: []
    // }
  },
  reducers: {
    savingNote: (state) => {
      state.isSaving = true;
    },
    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    setActiveNote: (state, action) => {
      state.activeNote = action.payload;
      state.messageSaved = "";
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    setSavingUpdateNote: (state) => {
      state.isSaving = true;
    },
    updateNote: (state, action) => {
      const { notes, activeNote } = action.payload;
      // ? For the same way notes state.notes is and array of notes updated but is a proxy
      // state.notes === notes
      state.notes = notes.map((note) => {
        if (note.id === activeNote.id) {
          return { ...note, ...activeNote };
        }
        return note;
      });
      state.messageSaved = `${activeNote.title} is saved!`;
      state.isSaving = false;
    },
    setActiveNoteWithImgsUrls: (state, action) => {
      state.activeNote.imageUrls = [
        ...state.activeNote.imageUrls,
        ...action.payload,
      ];
      state.isSaving = false;
    },
    clearNotesWhenLogout: (state) => {
      state.notes = [];
      state.activeNote = null;
      state.messageSaved = "";
      state.isSaving = false;
    },
    deleteNoteById: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
      state.activeNote = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  savingNote,
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSavingUpdateNote,
  updateNote,
  deleteNoteById,
  clearNotesWhenLogout,
  setActiveNoteWithImgsUrls,
} = journalSlice.actions;
