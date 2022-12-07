class Contract {
  constructor(contractName, company, signDate, efectiveDate, expireDate) {
    this.contractName = contractName
    this.company = company
    this.systemsInScope = [] // ? How to add multipal input with constructor method
    this.sigDate = signDate
    this.efectiveDate = efectiveDate
    this.expireDate = expireDate
    this.autoRenewal = '' // ? How to indicate 'yes' or 'no'
    this.autoRenewalDate = '' // ! Create formula
  }
}

// add autorenewal function

module.exports = Contract

// to be added later:
// - important clauses information section
// - versions, drafts, extention information
// - file copies inculding drafts
// - this.department = department
