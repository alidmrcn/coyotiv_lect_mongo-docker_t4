class Employee {
  constructor(name, nationality, department, title, startDate) {
    this.name = name
    this.nationality = nationality
    this.department = department
    this.title = title
    this.startDate = startDate
    this.leaveDate = '' // ? Can I leave it as a string?
    this.status = '' // ! currently employeed or left, also I wanted add relation with the leave date
    this.earnedVacationDays = ''
    this.spentVacations = [[]] // ? How can leave nested array? Such as [spend days and date]
    this.shifts = [] // ? How shall I define dates
  }

  calculateEarnedVacation() {
    return new Date().now() - this.startDate // ! check the formula
  }

  recordLeave(leaveDate) {
    this.leaveDate = leaveDate
  }

  addShift(shift) {
    this.shifts.push(shift)
  }
}

module.exports = Employee

// to be added later:
// - salary information
// - total payments
// - estimated leave compantations
