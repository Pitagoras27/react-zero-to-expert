import { useCalendarStore, useUiStore } from "../../hooks";

export const FabToDeleteEvent = () => {

  const { hasActiveEvent, startDeleteEvent } = useCalendarStore();
  const { isDateModalOpen } = useUiStore();

  const handleDeleteEvent = () => {
    startDeleteEvent();
  };

  return (
    <button
      aria-label="delete-event"
      className="fab btn btn-danger fab-danger"
      onClick={handleDeleteEvent}
      style={{ display: (hasActiveEvent && !isDateModalOpen) ? '' : 'none'}}
    >
      <i className="fas fa-trash-alt"></i>
    </button>
  );
};
