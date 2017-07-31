const mongoose = require('mongoose')
mongoose.Promise =  global.Promise


const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Please enter the skill name!'
  },
  progress: String,
  photo: String
})

module.exports = mongoose.model('Skill', skillSchema)
