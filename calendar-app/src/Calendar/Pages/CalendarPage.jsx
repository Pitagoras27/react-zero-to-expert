import { useState } from "react";
import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { CreateModal, DayEventBox, FabToAddEvent, FabToDeleteEvent, NavBar } from "../";
import { calendarLocalizer, getMessages } from "../../helpers";
import { useUiStore } from "../../hooks";
import { useCalendarStore } from "../../hooks/useCalendarStore";

// TODO: Review this basic implementation of react-big-calendar and date-fns and if it is neccessary add details in readme file

const eventStyleGetter = (event, start, end, isSelected) => {
  // console.log({ event, start, end, isSelected });

  const style = {
    backgroundColor: "#347CF7",
    borderRadius: "0px",
    opacity: 0.8,
    color: "white",
  };

  return { style };
};

export const CalendarPage = () => {
  const { events, onSetActiveEvent } = useCalendarStore();
  const { onModalOpen } = useUiStore();
  const [viewSelected, setViewSelected] = useState(
    localStorage.getItem("view") || "week"
  );

  const onDoubleClick = (event) => onModalOpen();

  const onOneClick = (event) => {
    onSetActiveEvent(event);
  };

  const onViewChange = (event) => {
    localStorage.setItem("view", event);
  };

  return (
    <>
      <NavBar />

      <Calendar
        culture="es"
        localizer={calendarLocalizer}
        defaultView={viewSelected}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "calc(100vh - 80px) " }}
        messages={getMessages()}
        eventPropGetter={eventStyleGetter}
        components={{
          event: DayEventBox,
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onOneClick}
        onView={onViewChange}
      />

      <FabToAddEvent />
      <FabToDeleteEvent />
      <CreateModal />
    </>
  );
};
