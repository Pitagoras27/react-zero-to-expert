import { useDispatch, useSelector } from "react-redux";
import { onModalDateClose, onModalDateOpen } from "../store";

export const useUiStore = () => {
  const { isDateModalOpen } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const onModalOpen = () => {
    dispatch(onModalDateOpen());
  };

  const onCloseModal = () => {
    dispatch(onModalDateClose());
  };

  return {
    isDateModalOpen,
    onModalOpen,
    onCloseModal,
  };
};
