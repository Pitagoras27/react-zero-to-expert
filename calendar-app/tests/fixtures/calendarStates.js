export const events = [
  {
    id: 1,
    title: 'Meeting for planning',
    notes: 'Start planning',
    // start: new Date('2022-08-21 13:00:00'), // ! Date in not serializable, error in some test [useCalendarStore.test]
    // end: new Date('2022-08-21 15:00:00'), // ! Date in not serializable, error in some test [useCalendarStore.test]
    start: '2022-08-18T01:00:00.000Z',
    end: '2022-08-18T03:42:02.000Z'
  },
  {
    id: 2,
    title: 'Demo after retro',
    notes: 'Sprint ending scrum',
    // start: new Date('2022-09-04 13:00:00'), // ! Date in not serializable, error in some test [useCalendarStore.test]
    // end: new Date('2022-09-05 15:00:00'), // ! Date in not serializable, error in some test [useCalendarStore.test]
    start: '2022-08-16T01:42:47.190Z',
    end: '2022-08-16T03:42:47.190Z'
  }
]

export const eventsInitialState = {
  events: [],
  activeEvent: null,
  isLoadingEvent: true
}

export const eventsLoadEvents = {
  events: [ ...events ],
  activeEvent: null,
  isLoadingEvent: false
}

export const eventsActiveEvent = {
  events: [ ...events ],
  activeEvent: { ...events[0] },
  isLoadingEvent: false
}