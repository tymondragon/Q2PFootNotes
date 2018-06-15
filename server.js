const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000
const listener = () => {console.log(`Listening in on port ${port}.`)}

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(morgan('dev'))

app.use(express.static("public"))
//Auth Routes
app.post('footnotes/users', (req, res, next)=> {
  //create user account
})
app.post('footnotes/users', (req, res, next)=> {
  //sign in as user
})

////USERS ROUTES//
app.get('footnotes/users/:id', (req, res, next) => {
  //return users info
})
// app.delete('footnotes/users/:id', (req, res, next) => {
//   //return users info
// })
app.patch('footnotes/users/:id', (req, res, next) => {
  //update users info
})


/////NOTES ROUTER
app.post('footnotes/users/:id/notes', (req, res, next) => {
  //create a note
})
app.get('footnotes/users/:id/notes', (req, res, next) => {
  //get all notes by user
})
app.get('footnotes/users/:id/notes/:id', (req, res, next) => {
  //get specific note from user
})
app.patch('footnotes/users/:id/notes/:id', (req, res, next) => {
  //update a note
})
app.delete('footnotes/users/:id/notes/:id', (req, res, next) => {
  //delete a specific note
})


//Catch-all
app.use((req, res, next) => {
  res.status(404).json({error:{message:'404 Not Found'}})
})
//All other error routes
// next({status:500, message:'something went wrong'})
//
app.use((err, req, res, next) => {
  res.status(err.status).json({error:err})
})
app.listen(port, listener)