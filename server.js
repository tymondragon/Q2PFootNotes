const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const app = express()

app.use(static.public)
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())