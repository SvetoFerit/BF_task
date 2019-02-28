const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const port = require('./config/config')

const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
)

const mongoURI = 'mongodb://localhost:27017/categories'

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log('mongodb connected'))
  .catch(err => console.log(err))

const Category = require('./routes/Categories')

app.use('/categories', Category)

app.listen(port.port, () => {
  console.log(`server is runnin on port: ${port.port}`)
})
