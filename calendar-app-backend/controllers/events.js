const { response } = require('express');
const EventSchema = require('../models/event');

const getEvents = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'Event retrive successful'
  });
}

const addEvent = async(req, res = response) => {
  const event = new EventSchema(req.body);
  
  try {
    event.user = req.uid;
    const eventSave = await event.save();

    res.json({
      ok: true,
      event: eventSave
    }); 
  } catch (error) {
    res.json({
      ok: false,
      msg: 'Occurs an error don\'t save an event'
    });    
  }
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