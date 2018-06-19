const express = require('express')
const router = express.Router()
const ctrl = require('../controller/notes.js')



router.post('/login', ctrl.signIn)/////Will be done later////
router.post('/users', ctrl.createUser)////////done/////
router.post('/notes', ctrl.createNote)///////done////////



router.get('/notes/:id', ctrl.getNotes)////////done//////
router.get('/users/:id', ctrl.getOneUser)///////done/////
router.get('/notes', ctrl.getAllNotes)////////done//////
router.get('/notes/:user_id/:notes_id', ctrl.getOneNoteForUser)
router.get('/users', ctrl.getUsers)


router.patch('notes/:id', ctrl.updateNote)////done
router.patch('/users/:id', ctrl.updateUser)//////done////


router.delete('/notes/:id', ctrl.deleteOneNote)////////done

//////////////////////////////////////
//////////////////////////////////////

// router.delete('/users/:id', ctrlUser.deleteOne)





module.exports = router
