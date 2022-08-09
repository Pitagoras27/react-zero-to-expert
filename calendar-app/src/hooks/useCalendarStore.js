import { useDispatch, useSelector } from "react-redux";
import { setActiveEvent } from "../store/calendar/calendarSlice";

export const useCalendarStore = () => {
  const { events, activeEvent } = useSelector((state) => state.calendar);
  const dispatch = useDispatch();

  const onSetActiveEvent = (event) => {
    dispatch(setActiveEvent(event));
  };

  return {
    events,
    activeEvent,
    onSetActiveEvent,
  };
};
