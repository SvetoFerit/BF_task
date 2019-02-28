const express = require('express')

const categories = express.Router()
const cors = require('cors')

categories.use(cors())


module.exports = categories
