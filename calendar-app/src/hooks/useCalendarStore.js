import { useDispatch, useSelector } from "react-redux";
import calendarApi from "../api/calendarApi";
import { onAddNewEvent, onDeleteEvent, onUpdateEvent, setActiveEvent } from "../store/calendar/calendarSlice";

export const useCalendarStore = () => {
  const { events, activeEvent } = useSelector((state) => state.calendar);
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const onSetActiveEvent = (event) => {
    dispatch(setActiveEvent(event));
  };

  const startSavingEvent = async (calendarEvent) => {
    if (calendarEvent.id) {
      dispatch(onUpdateEvent({ ...calendarEvent }));
    } else {
      const { data } = await calendarApi.post('/events', calendarEvent);
      const { id } = data?.event;
      dispatch(onAddNewEvent({ ...calendarEvent, id, user }));
    }
  };

  const startDeleteEvent = () => {
    dispatch(onDeleteEvent());
  }

  return {
    events,
    activeEvent,
    hasActiveEvent: !!activeEvent,
    onSetActiveEvent,
    startSavingEvent,
    startDeleteEvent,
  };
};
