const express = require('express')
const router = express.Router()
const ctrlNote = require('../controller/notes.js')
console.log("JELLOOO", ctrlNote)
router.post('/users/:id/notes', ctrlNote.create)
// router.get('/users/:id/notes/:id', ctrlNote.getOne)
// router.patch('/users/:id/notes/:id', ctrlNote.update)
// router.delete('/users/:id/notes/:id', ctrlNote.deleteOne)

//////////////////////////////////////
//////////////////////////////////////

// const ctrlUser = require('../controller/users.js')
//
// // router.post('/users', ctrlUser.create)
// router.get('/users/:id', ctrlUser.getOne)
// router.patch('/users/:id', ctrlUser.update)
// router.delete('/users/:id', ctrlUser.deleteOne)





module.exports = router
