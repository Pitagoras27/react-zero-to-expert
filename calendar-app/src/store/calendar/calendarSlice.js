import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";

const event = {
  _id: new Date().getTime(),
  title: "Cumpleaños del Jefe",
  notes: "Hay que comprar el pastel",
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: "#fafafa",
  user: {
    _id: "123",
    name: "CarlosG",
  },
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    events: [event],
    activeEvent: null,
  },
  reducers: {
    setActiveEvent: (state, { payload }) => {
      state.activeEvent = payload;
    },
    addNewEvent: (state, { payload }) => {
      state.events.push(payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setActiveEvent, addNewEvent } = calendarSlice.actions;
