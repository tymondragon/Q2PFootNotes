const model = require('../model/notes.js')

let createNote = (req, res, next) => {
  const data = model.create()
  res.status(200).json(data)
}
let getOneNote = (req, res, next) => {
  const data = model.getOne()
  res.status(200).json(data)
}
let updateNote = (req, res, next) => {
  const data = model.getOne()
  res.status(200).json(data)
}
let deleteOneNote = (req, res, next) => {
  const data = model.deletOneNote()
  res.status(200).json(data)
}
let createUser = (req, res, next) => {
  const data = model.createUser()
  res.status(200).json(data)
}
let getOneUser = (req, res, next) => {
  const data = model.getOneUser()
  res.status(200).json(data)
}
let updateUser = (req, res, next) => {
  const data = model.updateUser()
  res.status(200).json(data)
}


module.exports = {createNote, getOneNote, updateNote, deleteOneNote, createUser, getOneUser, updateUser}