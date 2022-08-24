import { fireEvent, render, screen } from "@testing-library/react";
import { FabToAddEvent } from "../../../src/Calendar/Components/FabToAddEvent";
import { useCalendarStore } from "../../../src/hooks/useCalendarStore";
import { useUiStore } from "../../../src/hooks/useUiStore";

jest.mock('../../../src/hooks/useUiStore');
jest.mock('../../../src/hooks/useCalendarStore')

describe('test in FabToAddEvent component', () => {
  const mockOnSetActiveEvent = jest.fn();
  const mockOnModalOpen = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test('should render  FabToAddEvent', () => {
    useCalendarStore.mockReturnValue({
      onSetActiveEvent: mockOnSetActiveEvent
    })
    useUiStore.mockReturnValue({
      onModalOpen: mockOnModalOpen
    })

    const { container } = render(<FabToAddEvent />);

    expect(container).toMatchSnapshot();
  });
  
  test('should onSetActiveEvent and onOpenModal have been called', () => {
    useCalendarStore.mockReturnValue({
      onSetActiveEvent: mockOnSetActiveEvent
    })
    useUiStore.mockReturnValue({
      onModalOpen: mockOnModalOpen
    })

    render(<FabToAddEvent />)

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(mockOnSetActiveEvent).toHaveBeenCalled();
    expect(mockOnModalOpen).toHaveBeenCalled();
  })

})