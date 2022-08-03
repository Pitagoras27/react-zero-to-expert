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
    },
    deleteNoteById: (state, action) => {},
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
  deleteNodeById,
} = journalSlice.actions;
