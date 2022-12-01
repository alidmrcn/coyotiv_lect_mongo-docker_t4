class Employee {
  constructor(name, nationality, department, title, startDate) {
    this.name = name
    this.nationality = nationality
    this.department = department
    this.title = title
    this.startDate = startDate
    this.leaveDate = ''
    this.status = '' // currently employeed or left
    this.earnedVacationDays = ''
    this.spentVacations = [[]]
    this.shifts = []
  }

  greet() {
    console.log(`Hello ${this.name}, welcome to T4`)
  }

  calculateEarnedVacation() {
    return new Date().now() - this.startDate
  }

  recordLeave(leaveDate) {
    this.leaveDate = leaveDate
  }

  addShift(shift) {
    this.shifts.push(shift)
  }
}

module.exports = Employee
