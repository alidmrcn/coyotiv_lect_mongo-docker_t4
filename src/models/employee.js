const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const employeeSchema = new mongoose.Schema({
  personelNo: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  nationality: {
    type: String,
    required: true,
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department',
    autopopulate: true,
  },
  title: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    default: new Date().setHours(0, 0, 0, 0),
    required: true,
  },
})

class Employee {
  //   calculateEarnedVacation() {
  //     return new Date().now() - this.startDate // ! check the formula
  //   }
  //   recordLeave(leaveDate) {
  //     this.leaveDate = leaveDate
  //   }
  //   addShift(shift) {
  //     this.shifts.push(shift)
  //   }
  //   }
  // to be added later:
  // - salary information
  // - total payments
  // - estimated leave compantations
}
employeeSchema.loadClass(Employee)
employeeSchema.plugin(autopopulate)

module.exports = mongoose.model('Employee', employeeSchema)

// ADD NOW
//     this.leaveDate = '' // ? Can I leave it as a string?
//     this.status = '' // ! currently employeed or left, also I wanted add relation with the leave date
//     this.earnedVacationDays = ''
//     this.spentVacations = [[]] // ? How can leave nested array? Such as [spend days and date]
//     this.shifts = [] // ? How shall I define dates
