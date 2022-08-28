import { render } from "@testing-library/react";
import { CreateModal } from "../../../src/Calendar/Components/CreateModal";
import { useCalendarStore } from "../../../src/hooks/useCalendarStore";
import { useForm } from "../../../src/hooks/useForm";
import { useUiStore } from "../../../src/hooks/useUiStore";
import { eventsActiveEvent } from "../../fixtures/calendarStates";

jest.mock('../../../src/hooks/useCalendarStore');
jest.mock('../../../src/hooks/useUiStore');
jest.mock('../../../src/hooks/useForm');

const mockOnValueChange = jest.fn();
const mockOnDataSelected = jest.fn();
const mockOnSubmitEvent = jest.fn();
const mockSetFormValues = jest.fn();

const mockOnCloseModal = jest.fn();

describe('tests of CreateModal component', () => {

  test('should render CreateModal component', () => {
    useUiStore.mockReturnValue({
      isDateModalOpen: false,
      onCloseModal: mockOnCloseModal()
    })

    useCalendarStore.mockReturnValue({
      activeEvent: eventsActiveEvent
    })

    useForm.mockReturnValue({
      title: '',
      notes: '',
      start: new Date('2022-08-21 13:00:00'),
      end: new Date('2022-08-21 15:00:00'),
      titleInputClass: '',
      inputRef: null,
      onValueChange: mockOnValueChange,
      onDateSelected: mockOnDataSelected,
      onSubmitEvent: mockOnSubmitEvent,
      setFormValues: mockSetFormValues,
    });

    // TODO: research how to render third part. Here modal render component Modal of react-modal
    const { container } = render(<CreateModal />);

    expect( container ).toBeTruthy()
  })

})