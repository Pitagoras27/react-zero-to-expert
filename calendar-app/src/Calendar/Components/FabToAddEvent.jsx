import { addHours } from "date-fns";
import { useCalendarStore, useUiStore } from "../../hooks";

export const FabToAddEvent = () => {
  const { onModalOpen } = useUiStore();
  const { onSetActiveEvent } = useCalendarStore();

  const handleAddNewEvent = () => {
    onSetActiveEvent({
      title: "",
      notes: "",
      start: new Date(),
      end: addHours(new Date(), 2),
      bgColor: "#fafafa",
      user: {
        _id: "",
        name: "",
      },
    });
    onModalOpen();
  };

  return (
    <button className="fab btn btn-primary" onClick={handleAddNewEvent}>
      <i className="fas fa-plus"></i>
    </button>
  );
};
