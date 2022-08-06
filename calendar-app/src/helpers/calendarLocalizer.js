import { format, getDay, parse, startOfWeek } from "date-fns";
import es from "date-fns/locale/es";
import { dateFnsLocalizer } from "react-big-calendar";

const locales = {
  es: es,
};

export const calendarLocalizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});
