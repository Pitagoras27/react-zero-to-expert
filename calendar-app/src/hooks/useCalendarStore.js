import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import calendarApi from "../api/calendarApi";
import { friedlyDate } from "../helpers";
import {
  onAddNewEvent,
  onDeleteEvent,
  onLoadEvents,
  onUpdateEvent,
  setActiveEvent
} from "../store/calendar/calendarSlice";

export const useCalendarStore = () => {
  const { events, activeEvent } = useSelector((state) => state.calendar);
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const onSetActiveEvent = (event) => {
    dispatch(setActiveEvent(event));
  };

  const startSavingEvent = async (calendarEvent) => {
    try {
      if (calendarEvent.id) {
        await calendarApi.put(`/events/${calendarEvent.id}`, calendarEvent);
        dispatch(onUpdateEvent({ ...calendarEvent }));
        return;
      }

      const { data } = await calendarApi.post('/events', calendarEvent);
      const { id } = data?.event;
      dispatch(onAddNewEvent({ ...calendarEvent, id, user }));
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.response.data.msg,
        text: "Error",
      })
    }
  };

  const startDeleteEvent = () => {
    dispatch(onDeleteEvent());
  }

  const startLoadingEvents = async() => {
    try {
      const { data } = await calendarApi.get('/events');
      const { events } = data;
      dispatch(onLoadEvents(friedlyDate(events)));
    } catch (error) {
      console.log('Don\'t retrive information about events');
    }
  }

  return {
    events,
    activeEvent,
    hasActiveEvent: !!activeEvent,
    onSetActiveEvent,
    startSavingEvent,
    startDeleteEvent,
    startLoadingEvents
  };
};
