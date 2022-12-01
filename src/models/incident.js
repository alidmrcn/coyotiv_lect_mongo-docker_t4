class Incident {
  constructor(system, reportDescription, location) {
    this.system = system
    this.reportDescription = reportDescription
    this.location = location
    this.startDate = ''
    this.leaveDate = ''
  }
}

module.exports = Incident
