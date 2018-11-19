const mongoose = require('mongoose')

const Schema = mongoose.Schema
const MediaSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['image', 'gif', 'video', 'text'],
    required: true
  },
  tags: [String],
  createdOn: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Media', MediaSchema)
