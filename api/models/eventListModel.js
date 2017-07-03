'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventSchema = new Schema({
  event_name: {
    type: String,
    Required: 'Kindly enter the name of the event'
  },
  event_status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  },
  event_img: {
    type: String
  },
  created_date: {
    type: Date,
    default: Date.now
  },
},
  {versionKey: false}
);
module.exports = mongoose.model('Events', EventSchema);
