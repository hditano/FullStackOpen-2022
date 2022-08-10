const mongoose = require('mongoose')


console.log('connecting to: ', process.env.MONGODB_URI)


mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log(`error connecting to MongoDB => ${error}`)
  })

const noteSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    required: true
  },
  number: {
    type: String,
    minLength: 8,
    required: true,
  },
  id: String
})

noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject.__v
    delete returnedObject._id
  }
})

module.exports = mongoose.model('Note', noteSchema)