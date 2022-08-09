import { useDispatch, useSelector } from "react-redux";
import { addNewEvent, setActiveEvent } from "../store/calendar/calendarSlice";

export const useCalendarStore = () => {
  const { events, activeEvent } = useSelector((state) => state.calendar);
  const dispatch = useDispatch();

  const onSetActiveEvent = (event) => {
    dispatch(setActiveEvent(event));
  };

  const startSavingEvent = (event) => {
    if (event.id) {
      // TODO: Update note.
    } else {
      dispatch(addNewEvent(event));
    }
  };

  return {
    events,
    activeEvent,
    onSetActiveEvent,
    startSavingEvent,
  };
};
