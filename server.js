const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000
const listener = () => {console.log(`Listening in on port ${port}.`)}

app.disable('x-powered-by')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(morgan('dev'))

const footnotes = require('./routes/notes.js')
app.use('/footnotes',footnotes)

app.use((err, req, res, next) => {
  const status = err.status || 500
  res.status(status).json({error:err.error})
})
app.use((req, res, next) => {
  res.status(404).json({error:{message:"Not Found"}})
})
app.listen(port, listener)

module.exports = app
