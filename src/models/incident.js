const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

class Incident {
  constructor(system, noticeDescription, location) {
    this.system = system
    this.noticeDescription = noticeDescription
    this.location = location
    this.noticeBy = '' // ? Shall I add by constructor or function
    this.noticeDate = '' // ? How shall I arrange date
    this.noticeTime = '' // ? How shall I arrange time
    this.responseDate = ''
    this.responseTime = ''
    this.incidentType = ''
    this.incidentDescription = ''
    this.incidentPhoto = []
    this.resolutionDate = ''
    this.resolutionTime = ''
    this.resolutionPhoto = []
    this.resolutionDescription = ''
    this.incidentDuration = '' // ! Function is to be added for calculation
    this.rootCause = ''
    this.usedMaterials = []
    this.involvedEmployee = []
    this.spendtManHour = '' // ! Function is to be added for calculation
    this.reportFilledBy = ''
    this.reportDate = ''
    this.reportTime = ''
    this.reportNo = ''
  }

  addIncidentPhoto(photo) {
    this.incidentPhoto.push(photo)
  }
}

// add other functions

module.exports = Incident

// to be added later:
// - status
// - improvement actions and plan
// - 3rd party involment details
