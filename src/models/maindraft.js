const Employee = require('./employee')
const Shift = require('./shift')

const Ali = new Employee('Ali', 'MEC')
const Selim = new Employee('Selim', 'ELC')
const Kumar = new Employee('Kumar', 'ICT')

const One = new Shift(1, '15/11/2022', 'Day')
const Two = new Shift(2, '15/11/2022', 'Night')
const Four = new Shift(4, '17/11/2022', 'Night')

Ali.addShift(One)
Ali.addShift(Two)
Ali.addShift(Four)
Four.addEmployee(Kumar)
Four.addEmployee(Selim)
