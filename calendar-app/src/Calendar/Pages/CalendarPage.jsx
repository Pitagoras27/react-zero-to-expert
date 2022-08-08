import { addHours } from "date-fns";
import { useState } from "react";
import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { DayEventBox, NavBar } from "../";
import { calendarLocalizer, getMessages } from "../../helpers";

// TODO: Review this basic implementation of react-big-calendar and date-fns and if it is neccessary add details in readme file

const events = [
  {
    title: "Cumpleaños del Jefe",
    notes: "Hay que comprar el pastel",
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: "#fafafa",
    user: {
      _id: "123",
      name: "Carlos",
    },
  },
];

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

// props events -> onDoubleClickEvent, onSelectEvent, onView
// prop related view -> defaultView
// Instalar react-modal
// Crear componente CreateModal
// props config -> className="modal" overClassName="modal-fondo" closeTimeoutMS={200}

export const CalendarPage = () => {
  const [viewSelected, setViewSelected] = useState(
    localStorage.getItem("view") || "week"
  );
  const onDoubleClick = (event) => {};

  const onOneClick = (event) => {};

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
    </>
  );
};
