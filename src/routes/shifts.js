const express = require('express')
const Shift = require('../models/user')

const router = express.Router()

/* GET shifts listing. */
router.get('/', async (req, res) => {
  res.send(await Shift.find({}).catch(error => console.log('Shiftss not found, error: ', error)))
})

/* GET initialize */
router.get('/initialize', async (req, res) => {
  const one = await Shift.create({ shiftno: 1, day: '15/11/2022', period: 'Day' })
  // const Two = await Shift.create({ shiftno: 2, day: '15/11/2022', period: 'Night' })
  // const Four = await Shift.create({ shiftno: 4, day: '17/11/2022', period: 'Night' })
  res.send(one)
})

/* POST user */
router.post('/', async (req, res) => {
  // const createdUser = await User.create(req.body)
  // res.status(201).send(createdUser)
})

module.exports = router
