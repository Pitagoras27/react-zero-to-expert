const { response } = require('express');

const getEvents = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'Event retrive successful'
  });
}

const addEvent = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'Event added successful'
  });
}

const updateEvent = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'Update Event successful'
  });
}

const deleteEvent = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'Event delete successful'
  });
}

module.exports = {
  getEvents,
  addEvent,
  updateEvent,
  deleteEvent
}