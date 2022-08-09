import { differenceInSeconds } from "date-fns";
import { useMemo, useRef, useState } from "react";
import Swal from "sweetalert2";

export const useModalForm = (initialState) => {
  const [formValues, setFormValues] = useState(initialState);
  const { title, notes, start, end } = formValues;
  const inputRef = useRef(null);
  const [validationText, setValidationText] = useState("");

  useMemo(() => {
    setValidationText(title.length <= 0 ? "is-invalid" : "");
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
    const differenceTime = differenceInSeconds(end, start);

    if (differenceTime <= 0 || isNaN(differenceTime)) {
      Swal.fire({
        icon: "error",
        title: "The date is incorret",
        text: "Try again",
      });
    }
    if (title.length <= 0) inputRef.current.select();
  };

  return {
    title,
    notes,
    start,
    end,
    validationText,
    inputRef,
    setFormValues,
    onValueChange,
    onDateSelected,
    onSubmitEvent,
  };
};
