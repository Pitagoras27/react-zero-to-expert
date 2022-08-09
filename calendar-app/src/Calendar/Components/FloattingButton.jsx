import { addHours } from "date-fns";
import { useCalendarStore, useUiStore } from "../../hooks";

export const FloattingButton = () => {
  const { onModalOpen } = useUiStore();
  const { onSetActiveEvent } = useCalendarStore();

  const onAddNewEvent = () => {
    onModalOpen();
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
  };

  return (
    <button className="fab btn btn-primary" onClick={onAddNewEvent}>
      <i className="fas fa-plus"></i>
    </button>
  );
};
