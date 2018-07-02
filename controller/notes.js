const knex = require('../knex')
/////SIGN IN////////
let signIn = (req, res, next) => {
  knex('users')
    .where('email', req.body.email)
    .andWhere('hashed_pw', req.body.hashed_pw)
    .then((result) => {
      if (result[0].email && result[0].hashed_pw) {
        res.send(result[0])
      }
    })
    .catch((err) => {
      res.send(err)
    })
}
////////CREATE////////
let createUser = (req, res, next) => {
  return knex('users')
    .insert({
      "first_name": req.body.first_name,
      "last_name": "test_last-name",
      "email": req.body.email,
      "hashed_pw": req.body.hashed_pw
    })
    .returning('*')
    .then((data) => {
      res.json(data[0])
    })
    .catch((err) => {
      res.send(err)
    })
}
let createNote = (req, res, next) => {
  return knex('notes')
    .insert({
      "user_id": req.body.user_id,
      "subject": req.body.subject,
      "content": req.body.content,
      "video_link": req.body.video_link
    })
    .returning('*')
    .then((data) => {
      res.json(data[0])
    })
    .catch((err) => {
      res.send(err)
    })
}
/////////////READ////////////////
// get all notes by user
let getNotes = (req, res, next) => {
  let id = req.params.id
  return knex('notes')
    .where('user_id', id)
    .then(result => {
      return res.status(200).send(result)
    })
    .catch((err) => {
      res.send(err)
    })
}
let getAllNotes = (req, res, next) => {
  return knex('notes')
    .then((rows) => {
      res.json(rows)
    })
    .catch((err) => {
      next(err)
    })
}
let getOneNote = (req, res, next) => {
  knex('notes')
    .where('id', req.params.id)
    .first()
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      res.send(err)
    })
}

let getOneUser = (req, res, next) => {
  knex('users')
    .where('id', req.params.id)
    .first()
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      res.send(err)
    })
}
///////UPDATE///////
let updateNote = (req, res, next) => {
  knex('notes')
    .where('id', req.params.id)
    .then((data) => {
      knex('notes')
        .where('id', req.params.id)
        .limit(1)
        .update({
          "content": req.body.content
        })
        .returning('*')
        .then((data) => {
          res.json(data[0])
        })
    })
    .catch((err) => {
      next(err)
    })
}
let getOneNoteForUser = (req, res, next) => {
  knex('notes')
    .where('id', req.params.id)
    .first()
    .then((data) => {
      if (!data) return next()
      res.send(data)
    })
    .catch((err) => {
      res.send(err)
    })
}
//////////DELETE/////////
let deleteOneNote = (req, res, next) => {
  knex('notes')
    .where('id', req.params.id)
    .first()
    .then((result) => {
      if (!result) return next()
      knex('notes')
        .del()
        .where('id', req.params.id)
        .then(() => {
          res.send(`ID ${req.params.id} Deleted`)
        })
    })
    .catch((err) => {
      res.send(err)
    })
}

module.exports = {
  getAllNotes,
  signIn,
  createNote,
  getNotes,
  getOneNoteForUser,
  updateNote,
  deleteOneNote,
  createUser,
  getOneUser,
  getOneNote
}
// getNotesBySubject,