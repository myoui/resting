const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ArticleSchema = new Schema({
  sourceName: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  publishedAt: {
    type: Date
  },
  url: {
    type: String,
    required: true,
    unique: true
  },
  urlToImage: {
    type: String
  }
})

module.exports = mongoose.model('Article', ArticleSchema)
