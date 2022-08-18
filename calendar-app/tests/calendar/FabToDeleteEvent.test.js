import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { FabToDeleteEvent } from "../../src/Calendar/Components/FabToDeleteEvent";
import { useCalendarStore } from "../../src/hooks/useCalendarStore";
import { store } from "../../src/store";

jest.mock('../../src/hooks/useCalendarStore');

describe('Test over FabToDeleteEvent', () => {

  const mockStartDeleteEvent = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test('should render FabToDeleteEvent', () => {

    useCalendarStore.mockReturnValue({
      hasActiveEvent: false,
    });

    render( 
      <Provider store={store}>
        <FabToDeleteEvent />
      </Provider>
    )
    
    const targetButton = screen.getByLabelText('delete-event');

    expect(targetButton.classList).toContain('fab');
    expect(targetButton.classList).toContain('btn-danger');
    expect(targetButton.classList).toContain('fab-danger');
    expect(targetButton.style.display).toContain('none');

  });

  test('should show button to delete event', () => {

    useCalendarStore.mockReturnValue({
      hasActiveEvent: true
    })

    render( 
      <Provider store={store}>
        <FabToDeleteEvent />
      </Provider>
    )

    const targetButton = screen.getByLabelText('delete-event');

    expect(targetButton.style.display).toBe('');
  });

  test('should call startDelete event function', () => {
    useCalendarStore.mockReturnValue({
      hasActiveEvent: true,
      startDeleteEvent: mockStartDeleteEvent
    });

    render(
      <Provider store={store}>
        <FabToDeleteEvent />
      </Provider>
    );

    const targetButton = screen.getByLabelText('delete-event');
    fireEvent.click(targetButton);

    expect(mockStartDeleteEvent).toHaveBeenCalled();
  });

})