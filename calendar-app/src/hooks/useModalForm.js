import { differenceInSeconds } from "date-fns";
import { useMemo, useRef, useState } from "react";
import Swal from "sweetalert2";
import { useCalendarStore } from "./useCalendarStore";
import { useUiStore } from "./useUiStore";

export const useModalForm = (initialState) => {
  const [formValues, setFormValues] = useState(initialState);
  const { title, notes, start, end } = formValues;
  const inputRef = useRef(null);
  const [validationText, setValidationText] = useState(false);
  const { startSavingEvent } = useCalendarStore();
  const { onCloseModal } = useUiStore();

  const titleInputClass = useMemo(() => {
    if (!validationText) return "first run";

    return title.length <= 0 ? "is-invalid" : "";
  }, [validationText, title]);

  const onValueChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const onDateSelected = (data, timeAction) => {
    setFormValues({
      ...formValues,
      [timeAction]: data,
    });
  };

  const onSubmitEvent = (event) => {
    event.preventDefault();
    setValidationText(true);
    const differenceTime = differenceInSeconds(end, start);

    if (differenceTime <= 0 || isNaN(differenceTime)) {
      Swal.fire({
        icon: "error",
        title: "The date is incorret",
        text: "Try again",
      });
      return;
    }
    if (title.length <= 0) {
      inputRef.current.select();
      return;
    }

    startSavingEvent(formValues);
    onCloseModal();
    setValidationText(false);
  };

  return {
    title,
    notes,
    start,
    end,
    titleInputClass,
    inputRef,
    setFormValues,
    onValueChange,
    onDateSelected,
    onSubmitEvent,
  };
};
