import { configureStore } from "@reduxjs/toolkit";
import { act, renderHook } from "@testing-library/react";
import { Provider } from "react-redux";
import { calendarApi } from "../../src/api";
import { friedlyDate } from "../../src/helpers/friedlyDate";
import { useCalendarStore } from "../../src/hooks/useCalendarStore";
import { authSlice } from "../../src/store/auth/authSlice";
import { calendarSlice, onAddNewEvent, setActiveEvent } from "../../src/store/calendar/calendarSlice";
import { events, eventsActiveEvent, eventsInitialState, eventsLoadEvents } from "../fixtures/calendarStates";
import { userTest } from "../fixtures/testUser";

const mockGetStore = (initialState) => configureStore({
  reducer: {
    calendar: calendarSlice.reducer,
    auth: authSlice.reducer
  },
  preloadedState: {
    calendar: { ...initialState },
    auth: {
      ...userTest
    }
  }
})

jest.mock('../../src/helpers/friedlyDate');

describe('test over hook useCalendarStore', () => {

  beforeEach(() => jest.clearAllMocks());

  test('should show default state', () => {
    const mockStore = mockGetStore(eventsInitialState)

    const { result } = renderHook(() => useCalendarStore(), {
      wrapper: ({ children }) => <Provider store={mockStore}>{children}</Provider>
    })

    const newEventState = { ...eventsInitialState };
    delete newEventState.isLoadingEvent;

    expect(result.current).toEqual({
      ...newEventState,
      hasActiveEvent: false,
      onSetActiveEvent: expect.any( Function),
      startSavingEvent: expect.any( Function),
      startDeleteEvent: expect.any( Function),
      startLoadingEvents: expect.any( Function)
    })
  });


  test('should set active event', async () => {
    const mockStore = mockGetStore(eventsActiveEvent)
    const event = events[0];

    const { result } = renderHook(() => useCalendarStore(), {
      wrapper: ({ children }) => <Provider store={mockStore}>{children}</Provider>
    });

    const { onSetActiveEvent } = result.current;

    act(() => onSetActiveEvent(setActiveEvent(event)));

    expect(result.current.events).toContain(event);
  });

  test('should update event state', async () => {
    // TODO: call onUpdateEvent when startSavingEvent is called and only update
    const mockStore = mockGetStore(eventsLoadEvents);
    const eventUpdated = {
      id: 2,
      notes: "For upgrade reports checker",
      title: "Sprint Planning",
      start: "Thu Aug 31 2022 14:29:41 GMT-0500 (hora de verano central)",
      end: "Thu Aug 31 2022 16:29:41 GMT-0500 (hora de verano central)"
    };

    const { result } = renderHook(() => useCalendarStore(), {
      wrapper: ({ children }) => <Provider store={ mockStore }>{ children }</Provider> 
    });

    const { startSavingEvent } = result.current;

    await act( async () => await startSavingEvent(eventUpdated));

    // TODO: Create expects
  })




  test('should add new event and update state', async () => {
    const mockStore = mockGetStore(eventsLoadEvents);
    const newEvent = {
      notes: "For on boarding new resourses",
      title: "How the application works",
      start: "Thu Aug 31 2022 14:29:41 GMT-0500 (hora de verano central)",
      end: "Thu Aug 31 2022 16:29:41 GMT-0500 (hora de verano central)"
    };

    const { uid, name } = userTest;

    const { result } = renderHook(() => useCalendarStore(), {
      wrapper: ({ children }) => <Provider store={ mockStore }>{ children }</Provider> 
    });

    const { startSavingEvent } = result.current;

    const spy = jest.spyOn(calendarApi, 'post').mockReturnValue({
      data: { event: newEvent }
    });

    await act( async () => await startSavingEvent(
      onAddNewEvent({ ...newEvent, id: '7455fgt30b6fb60c6c68c636', user: { uid, name }})
    ));
    
    // TODO: Create expects

    spy.mockRestore();
  })




  test('should delete event and update state', async () => {
    const mockStore = mockGetStore(eventsActiveEvent)

    const { result } = renderHook(() => useCalendarStore(), {
      wrapper: ({ children }) => <Provider store={ mockStore }>{ children }</Provider> 
    });

    // ? This spy run befor to call startDeleteEvent of useCalendarStore
    const spy = jest.spyOn(calendarApi, 'delete').mockReturnValue({
      data: {ok: true, msg: 'Message deleted successful'}
    })

    const { startDeleteEvent } = result.current;
    await act( async () => await startDeleteEvent() );

    expect(result.current.events.length).not.toEqual(events.length);

    // ? Always call this method, when we use spy mocks
    spy.mockRestore();
  });

  test('should onload events', async () => {
    const mockStore = mockGetStore(eventsInitialState);

    friedlyDate.mockReturnValue(events);

    const { result } = renderHook(() => useCalendarStore(), {
      wrapper: ({ children }) => <Provider store={mockStore}>{ children }</Provider>
    });

    const spy = jest.spyOn(calendarApi, 'get').mockReturnValue({
      data: eventsLoadEvents
    });

    const { startLoadingEvents } = result.current;
    await act( async () => await startLoadingEvents());

    expect(result.current.events).toEqual(events);

    spy.mockClear();
  });

})