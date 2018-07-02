const express = require('express')
const router = express.Router()
const ctrl = require('../controller/notes.js')



router.post('/login', ctrl.signIn)
router.post('/signup', ctrl.createUser)
router.post('/notes', ctrl.createNote)



router.get('/notes/:id', ctrl.getNotes)
router.get('/users/:id', ctrl.getOneUser)
router.get('/notes', ctrl.getAllNotes)
router.get('/note/:id', ctrl.getOneNoteForUser)


router.put('/notes/:id', ctrl.updateNote)


router.delete('/notes/:id', ctrl.deleteOneNote)







module.exports = router
