const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema({
  title: {
    type: String,
  },
  publishedAt: {
    type: Date,
    default: Date.now,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  urlToImage: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: false,
    required: true,
  },
})


const Category = mongoose.model('category', CategorySchema)
module.exports = Category
