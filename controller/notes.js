const model = require('../model/notes.js')

let create = (req, res, next) => {
  const data = model.create()
  res.status(200).json(data)
}


module.exports = {create}