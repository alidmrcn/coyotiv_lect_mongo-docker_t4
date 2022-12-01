class Shift {
  constructor(shiftno, day, period) {
    this.shiftno = shiftno
    this.day = day // date
    this.period = period // night or day
    this.employees = []
  }

  addEmployee(employee) {
    this.employees.push(employee)
  }
}

module.exports = Shift
