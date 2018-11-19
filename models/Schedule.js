const mongoose = require('mongoose')

const Schema = mongoose.Schema
const ScheduleScema = new Schema({
  date: {
    type: String,
    required: true,
    unique: true
  },
  year: {
    type: Number,
    required: true
  },
  month: {
    type: Number,
    required: true
  },
  day: {
    type: Number,
    required: true
  },
  events: [String],
  created: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Schedule', ScheduleScema)
