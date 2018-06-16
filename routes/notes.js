const express = require('express')
const router = express.Router()
const ctrl = require('../controller/notes.js')
router.post('/users/:id/notes', ctrl.createNote)
router.get('/users/:id/notes/:id', ctrl.getOneNote)
router.patch('/users/:id/notes/:id', ctrl.updateNote)
router.delete('/users/:id/notes/:id', ctrl.deleteOneNote)

//////////////////////////////////////
//////////////////////////////////////

router.post('/users', ctrl.createUser)
router.get('/users/:id', ctrl.getOneUser)
router.patch('/users/:id', ctrl.updateUser)
// const ctrlUser = require('../controller/users.js')
//
// router.delete('/users/:id', ctrlUser.deleteOne)





module.exports = router
