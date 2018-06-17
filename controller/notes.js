const knex = require('../knex')


let getNotes = (req, res, next) => {
  let id = req.params.id
  return knex('notes')
    .where('user_id', id)
    .then(result => {
      console.log("WHEEEEEE!")
      return res.status(200).send(result)
    })
    .catch((err) => {
      {err : "404"}
      return next({err})
    })
}
let getOneNote = (req, res, next) => {
  let id = req.params.id
  const data = model.getOneNote(id)
  res.status(200).json(data)
}
let getOneUser = (req, res, next) => {
  let id = req.params.id
  const data = model.getOneUser()
  res.send(data)
}
////////CREATE////////
let createUser = (req, res, next) => {
  const data = model.createUser()
  res.status(200).json(data)
}
let createNote = (req, res, next) => {
  const data = model.create()
  res.status(200).json(data)
}
///////UPDATE///////
let updateNote = (req, res, next) => {
  const data = model.updateNote()
  res.status(200).json(data)
}
let updateUser = (req, res, next) => {
  const data = model.updateUser()
  res.status(200).json(data)
}
//////////DELETE/////////
let deleteOneNote = (req, res, next) => {
  const data = model.deletOneNote()
  res.status(200).json(data)
}


module.exports = {createNote, getOneNote, getNotes, updateNote, deleteOneNote, createUser, getOneUser, updateUser}