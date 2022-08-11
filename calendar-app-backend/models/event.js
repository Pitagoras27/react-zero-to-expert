const { Schema, model } = require('mongoose');

const EventSchema = Schema({
  title: {
    type: String,
    required: true
  },
  notes: {
    type: String,
  },
  start: {
    type: Date,
    required: true
  },
  end: {
    type: Date,
    required: true
  },
  user: {
    type: Schema.Types.ObjectID,
    ref: 'User',
    required: true
  }
});

// console.log(EventSchema.method('toJSON'));

module.exports = model('Event', EventSchema);
