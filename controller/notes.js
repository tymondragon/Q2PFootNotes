const model = require('../model/notes.js')

let createNote = () => {
  const data = model.create()
  res.status(200).json(data)
}
let getOneNote = () => {
  const data = model.getOne()
  res.status(200).json(data)
}
let updateNote = () => {
  const data = model.getOne()
  res.status(200).json(data)
}
let deleteOneNote = () => {
  const data = model.getOne()
  res.status(200).json(data)
}
let createUser = () => {
  const data = model.getOne()
  res.status(200).json(data)
}
let getOneUser = () => {
  const data = model.getOne()
  res.status(200).json(data)
}
let updateUser = () => {
  const data = model.getOne()
  res.status(200).json(data)
}


module.exports = {createNote, getOneNote, updateNote, deleteOneNote, createUser, getOneUser, updateUser}