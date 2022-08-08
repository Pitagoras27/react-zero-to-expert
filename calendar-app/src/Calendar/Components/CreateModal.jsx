import { addHours } from "date-fns";
import es from "date-fns/locale/es";
import { useState } from "react";
import DatePicker from "react-datepicker";
import Modal from "react-modal";

import "react-datepicker/dist/react-datepicker.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export const CreateModal = () => {
  const [formValues, setFormValues] = useState({
    title: "Carlor",
    notes: "Purification",
    start: new Date(),
    end: addHours(new Date(), 2),
  });

  const { title, notes, start, end } = formValues;

  const [modalClose, setModalClose] = useState(true);
  const closeModal = () => setModalClose(false);

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

  return (
    <Modal
      isOpen={modalClose}
      onRequestClose={closeModal}
      style={customStyles}
      classModal="modal"
      overClassName="modal-fondo"
      closeTimeoutMS={200}
    >
      <h1> Nuevo evento </h1>
      <hr />
      <form className="container">
        <div className="form-group mb-2">
          <label>Fecha y hora inicio</label>
          <DatePicker
            selected={start}
            onChange={(date) => onDateSelected(date, "start")}
            className="form-control"
            dateFormat="MMMM d, yyyy h:mm aa"
            locale={es}
            timeCaption="hora"
            showTimeSelect
          />
        </div>

        <div className="form-group mb-2">
          <label>Fecha y hora fin</label>
          <DatePicker
            selected={end}
            onChange={(date) => onDateSelected(date, "end")}
            className="form-control"
            dateFormat="MMMM d, yyyy h:mm aa"
            minDate={start}
            locale={es}
            timeCaption="hora"
            showTimeSelect
          />
        </div>

        <hr />
        <div className="form-group mb-2">
          <label>Titulo y notas</label>
          <input
            type="text"
            className="form-control"
            placeholder="Título del evento"
            name="title"
            autoComplete="off"
            value={title}
            onChange={onValueChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            Una descripción corta
          </small>
        </div>

        <div className="form-group mb-2">
          <textarea
            type="text"
            className="form-control"
            placeholder="Notas"
            rows="5"
            name="notes"
            value={notes}
            onChange={onValueChange}
          ></textarea>
          <small id="emailHelp" className="form-text text-muted">
            Información adicional
          </small>
        </div>

        <button type="submit" className="btn btn-outline-primary btn-block">
          <i className="far fa-save"></i>
          <span> Guardar</span>
        </button>
      </form>
    </Modal>
  );
};

//
// DatePicker (end) -> minDate=
