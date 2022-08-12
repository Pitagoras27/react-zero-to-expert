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

const updateEvent = async (req, res = response) => {
  const idReq = req.params.id;
  const uid = req.uid;
  
  try {
    const event = await EventSchema.findById(idReq);

    if(!event) {
      return res.status(404).json({
        ok: false,
        msg: 'Event not found.'
      });
    }

    if(event.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: 'Not authorized'
      });
    }

    const dataUpdated = {
      ...req.body,
      user: uid
    }

    const updateDb = await EventSchema.findByIdAndUpdate(idReq, dataUpdated);

    res.json({
      ok: true,
      event: updateDb
    })

  } catch (error) {    
    res.status(500).json({
      ok: false,
      msg: 'Occurs an error, try later'
    });


  }
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