const { response } = require('express');
const EventSchema = require('../models/event');

const getEvents = async(req, res = response) => {
  const events = await EventSchema.find().populate('user', 'name');

  res.json({
    ok: true,
    events
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