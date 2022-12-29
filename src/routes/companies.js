const express = require('express')
const Company = require('../models/company')

const router = express.Router()

/* GET companies listing. */
router.get('/', async (req, res) => {
  res.send(await Company.find({}).catch(error => console.log('Companies not found, error: ', error)))
})

/* GET initialize */
router.get('/initialize', async (req, res) => {})

/* POST user */
router.post('/', async (req, res) => {
  // const createdUser = await User.create(req.body)
  // res.status(201).send(createdUser)
})

module.exports = router
