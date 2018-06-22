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
  console.log(req.body);
  return knex('users')
    .insert({
      "first_name": req.body.first_name,
      "last_name": "test_last-name",
      "email": req.body.email,
      "hashed_pw": req.body.hashed_pw
    })
    .returning('*')
    .then((data) => {
      console.log("DATA IS JEJEJEJ", data);
      res.json(data[0])
    })
    .catch((err) => {
      console.log("ERRRRRROR", err);
      res.send(err)
    })
}
let createNote = (req, res, next) => {
  console.log(req.body);
  return knex('notes')
    .insert({
      "user_id": req.body.user_id,
      "subject": req.body.subject,
      "content": req.body.content,
      "video_link": req.body.video_link
    })
    .returning('*')
    .then((data) => {
    console.log("DATA IS CREATEDATA", data)
      res.json(data[0])
    })
    .catch((err) => {
      console.log("ERRRRRROR on create", err)
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
      console.log("GETNOTES ERRRRRROR", err);
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
      console.log("GET ONE NOTE ERRRRRROR", err);
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
      console.log("ERRRRRROR", err);
      res.send(err)
    })
}
///////UPDATE///////
let updateNote = (req, res, next) => {
  console.log("NOTES.JS LINE 106", req.params.id);
  knex('notes')
    .where('id', req.params.id)
    .then((data) => {
      console.log("i got this data", data);
      knex('notes')
        .where('id', req.params.id)
        .limit(1)
        .update({
          "content": req.body.content
        })
        .returning('*')
        .then((data) => {
          console.log("DATA IS UPDATE NOTE", data)
          res.json(data[0])
        })
    })
    .catch((err) => {
      console.log("UPDATE NOTE ERRRRRROR", err);
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
      console.log("GET ONE NOTE FOR USER ERRRRRROR", err);
      res.send(err)
    })
}
let updateUser = (req, res, next) => {
  knex('users')
    .where('id', req.params.id)
    .then((data) => {
      knex('users')
        .where('id', req.params.id)
        .limit(1)
        .update({
          "first_name": req.body.first_name,
          "last_name": req.body.last_name,
          "email": req.body.email,
          "hashed_pw": req.body.hashed_pw
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
      console.log("DELETE ONE NOTE ERRRRRROR", err);
      res.send(err)
    })
}
let getUsers = (req, res, next) => {
  return knex('users')
    .then((rows) => {
      res.json(rows)
    })
    .catch((err) => {
      next(err)
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
  updateUser,
  getOneNote,
  getUsers
}
// getNotesBySubject,