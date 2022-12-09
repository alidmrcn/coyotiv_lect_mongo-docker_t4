const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const departmentSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  systems: {
    type: String,
    required: true,
  },
})

class Department {}

departmentSchema.loadClass(Department)
departmentSchema.plugin(autopopulate)

module.exports = mongoose.model('Department', departmentSchema)
