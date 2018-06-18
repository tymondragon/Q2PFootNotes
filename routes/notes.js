const express = require('express')
const router = express.Router()
const ctrl = require('../controller/notes.js')



router.post('/users', ctrl.signIn)/////Will be done later////
router.post('/users', ctrl.createUser)////////done/////
router.post('/notes', ctrl.createNote)///////done////////



router.get('/users/:id/notes', ctrl.getNotes)////////done//////
router.get('/users/:id', ctrl.getOneUser)///////done/////
router.get('/notes', ctrl.getAllNotes)////////done//////
// router.get('/notes/:id', ctrl.getNotesBySubject)


router.patch('/users/:id/notes/:id', ctrl.updateNote)////done
router.patch('/users/:id', ctrl.updateUser)//////done////


router.delete('/notes/:id', ctrl.deleteOneNote)////////done

//////////////////////////////////////
//////////////////////////////////////

// router.delete('/users/:id', ctrlUser.deleteOne)





module.exports = router
