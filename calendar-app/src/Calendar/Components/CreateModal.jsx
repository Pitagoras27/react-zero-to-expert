import { useState } from "react";
import Modal from "react-modal";

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
  const [modalClose, setModalClose] = useState(true);
  const closeModal = () => setModalClose(false);

  return (
    <Modal
      isOpen={modalClose}
      onRequestClose={closeModal}
      style={customStyles}
      classModal="modal"
      overClassName="modal-fondo"
      closeTimeoutMS={200}
    >
      <h2>I am I modal</h2>
      <hr />
      <div>
        Dolor irure elit tempor consequat culpa amet laboris ad cupidatat magna
        et.
      </div>
    </Modal>
  );
};
