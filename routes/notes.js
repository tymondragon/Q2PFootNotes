const express = require('express')
const router = express.Router()
const ctrlNote = require('../controller/notes.js')

router.post('/users/:id/notes', ctrlNote.create)
router.get('/users/:id/notes/:id', ctrlNote.getOne)
router.patch('/users/:id/notes/:id', ctrlNote.update)
router.delete('/users/:id/notes/:id', ctrlNote.deleteOne)












module.exports = router
