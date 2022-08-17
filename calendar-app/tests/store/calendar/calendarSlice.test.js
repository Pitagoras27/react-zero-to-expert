import {
  calendarSlice,
  onAddNewEvent,
  onDeleteEvent,
  onLoadEvents,
  onLogoutCalendar,
  onUpdateEvent,
  setActiveEvent
} from "../../../src/store/calendar/calendarSlice";

import { events, eventsActiveEvent, eventsInitialState, eventsLoadEvents } from "../../fixtures/calendarStates";

describe('Test of calendarSlice', () => {

  test('should show initialState', () => {
    expect(calendarSlice.getInitialState()).toEqual(eventsInitialState);
  });

  test('should load all events in state', () => {
    const state = calendarSlice.reducer(eventsInitialState, onLoadEvents(events));

    expect(state).toEqual(eventsLoadEvents);
  });

  test('should set active event', () => {
    const state = calendarSlice.reducer(eventsLoadEvents, setActiveEvent(events[0]));

    expect(state).toEqual(eventsActiveEvent);
  });

  test('should set new state when adding new event', () => {
    const newEvent = {
      id: 3,
      title: 'Onboarding main app',
      notes: 'New starting',
      start: new Date('2022-09-21 13:00:00'),
      end: new Date('2022-09-21 15:00:00'),
    }

    const state = calendarSlice.reducer(eventsLoadEvents, onAddNewEvent(newEvent));
    const addedEvent = [ ...eventsLoadEvents.events, newEvent ];
    expect(state).toEqual({
      ...eventsLoadEvents,
      events: addedEvent
    })
  })

  test('should update state when update event', () => {
    const updatedEvent = {
      id: 1,
      title: 'Review bug in production',
      notes: 'Priority',
      start: new Date('2022-08-21 13:00:00'),
      end: new Date('2022-08-21 14:00:00'),
    }
    const state = calendarSlice.reducer(eventsLoadEvents, onUpdateEvent(updatedEvent));
    expect(state.events).toContain(updatedEvent);
  })

  test('should update state when delete active event', () => {
    const leftoverEvent = events[1];
    const state = calendarSlice.reducer(eventsActiveEvent, onDeleteEvent(events[0]));
    expect(state.events).toContain(leftoverEvent);
  })

  test('should clean state when dispath onLogoutCalendar action', () => {
    const state = calendarSlice.reducer(eventsActiveEvent, onLogoutCalendar());

    expect(state).toEqual(eventsInitialState);
  })
})