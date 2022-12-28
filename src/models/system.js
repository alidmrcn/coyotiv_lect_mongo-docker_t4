const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const systemSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  shortName: {
    type: String,
    unique: true,
    required: true,
  },
  relatedCompany: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Company',
      autopopulate: true,
    },
  ],
  contracts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Contract',
      autopopulate: true,
    },
  ],
})

class System {}

systemSchema.loadClass(System)
systemSchema.plugin(autopopulate)

module.exports = mongoose.model('Department', systemSchema)

/* to be added later:
    - staff
    - financial data
*/
