/////////READ/////\
let getNotes = (req, res, next) => {
  return knex('notes')
    .then(result => {
      console.log("WHEEEEEE!")
      return result
    })
    .catch((err) => {
      return next(err)
    })
}
let getOneNote = (id) => {
  return knex('notes')
    .then(result => {
      console.log("WHEEEEEE!")
      return result
    })
    .catch((err) => {
      console.log("JELLLLLO!")
      return next("WHOOPs")
    })
  // return 'hello from getOneNote'
}
let getOneUser = (id) => {
  return knex('users')
  .where(id, 'users.id')
    .then(result => {
      return result
      console.log("WHEEEEEE!")
    })
    .catch((err) => {
      console.log("JELLLLLO!")
      return next(err)
    })
}
///////////CREATE//////////
let createNote = () => {
  return 'hello from createNote'
}
let createUser = () => {
  return 'hello from createUser'
}
////////////UPDATE///////////
let updateNote = () => {
  return 'hello from updateNote'
}
let updateUser = () => {
  return 'hello from updateUser'
}
////////////DELETE///////////
let deleteOneNote = () => {
  return 'hello from deleteOneNote'
}

module.exports = {
  createNote,
  getOneNote,
  getNotes,
  updateNote,
  deleteOneNote,
  createUser,
  getOneUser,
  updateUser
}