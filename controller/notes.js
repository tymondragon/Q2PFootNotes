const knex = require('../knex')
/////SIGN IN////////
let signIn = (req, res, next) => {
  knex('users')
    .andWhere('email', req.body.email)
    .andWhere('hashed_pw', req.body.hashed_pw)
    .then((result) => {
      if (result[0].email && result[0].hashed_pw) {
        res.send(result[0])
      }
    })
    .catch((err) => {
      res.send("Please enter the correct information")
    })
}

////////CREATE////////
let createUser = (req, res, next) => {
  return knex('users')
    .insert({
      "first_name": req.body.first_name,
      "last_name": req.body.last_name,
      "email": req.body.email,
      "hashed_pw": req.body.hashed_pw
    })
    .returning('*')
    .then((data) => {
      res.json(data[0])
    })
    .catch((err) => {
      let error = {
        err: "404"
      }
      return next({
        error
      })
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
      // console.log(data);
      res.json(data[0])
    })
    .catch((err) => {
      let error = {
        err: "404"
      }
      return next({
        error
      })
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
      let error = {
        err: "404"
      }
      return next({
        error
      })
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
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      let error = {
        err: "404"
      }
      return next({
        error
      })
    })
}

let getOneUser = (req, res, next) => {
  knex('users')
    .where('id', req.params.id)
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      let error = {
        err: "404"
      }
      return next({
        error
      })
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
          "user_id": req.body.user_id,
          "subject": req.body.subject,
          "content": req.body.content,
          "video_link": req.body.video_link
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
    .where('id', req.params.user_id)
    .first()
    .then((data) => {
      if (!data) return next()
      knex('notes')
        .where('id', req.params.notes_id)
        .first()
        .then((result) => {
          res.send(result)
        })
    })
    .catch((err) => {
      let error = {
        err: "404"
      }
      return next({
        error
      })
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
      let error = {
        err: "404"
      }
      return next({
        error
      })
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
  getOneNote
}
// getNotesBySubject,