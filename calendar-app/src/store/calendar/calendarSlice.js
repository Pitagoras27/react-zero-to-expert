import { createSlice } from "@reduxjs/toolkit";

export const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    events: [],
    activeEvent: null,
    isLoadingEvent: true
  },
  reducers: {
    setActiveEvent: (state, { payload }) => {
      state.activeEvent = payload;
    },
    onAddNewEvent: (state, { payload }) => {
      state.events.push(payload);
      state.activeEvent = null;
    },
    onUpdateEvent: (state, { payload }) => {
      state.events = state.events.map(event => {
        if(event._id === payload._id) {
          return payload
        }
        return event
      });
    },
    onDeleteEvent: (state) => {
      if(state.activeEvent) {
        state.events = state.events.filter(event => event._id !== state.activeEvent._id);
        state.activeEvent = null;
      }
    },
    onLoadEvents: (state, { payload }) => {
      state.isLoadingEvent = false;
      state.events = payload; 
    }
  },
});

// Action creators are generated for each case reducer function
export const { setActiveEvent, onAddNewEvent, onUpdateEvent, onDeleteEvent, onLoadEvents } = calendarSlice.actions;
