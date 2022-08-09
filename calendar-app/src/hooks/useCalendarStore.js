import { useDispatch, useSelector } from "react-redux";
import { onAddNewEvent, setActiveEvent } from "../store/calendar/calendarSlice";

export const useCalendarStore = () => {
  const { events, activeEvent } = useSelector((state) => state.calendar);
  const dispatch = useDispatch();

  const onSetActiveEvent = (event) => {
    dispatch(setActiveEvent(event));
  };

  const startSavingEvent = (calendarEvent) => {
    if (calendarEvent._id) {
      // TODO: Update note.
    } else {
      dispatch(onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }));
    }
  };

  return {
    events,
    activeEvent,
    onSetActiveEvent,
    startSavingEvent,
  };
};
