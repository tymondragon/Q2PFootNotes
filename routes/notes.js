const express = require('express')
const router = express.Router()
const ctrl = require('../controller/notes.js')

router.post('/:email/:password', ctrl.signIn)
router.post('/notes', ctrl.createNote)///////done////////
router.get('/users/:id/notes', ctrl.getNotes)////////done//////
router.get('/notes', ctrl.getAllNotes)////////done//////

// router.get('/notes/:id', ctrl.getNotesBySubject)
router.patch('/users/:id/notes/:id', ctrl.updateNote)
router.delete('/users/:id/notes/:id', ctrl.deleteOneNote)

//////////////////////////////////////
//////////////////////////////////////

router.post('/users', ctrl.createUser)////////done/////
router.get('/users/:id', ctrl.getOneUser)///////done/////
router.patch('/users/:id', ctrl.updateUser)
// const ctrlUser = require('../controller/users.js')
//
// router.delete('/users/:id', ctrlUser.deleteOne)





module.exports = router
