require('dotenv').config({ debug: process.env.DEBUG })
const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

require('./database-connection')

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const contractsRouter = require('./routes/contracts') // +
const departmentsRouter = require('./routes/departments') // +
const employeesRouter = require('./routes/employees') // +
const incidentsRouter = require('./routes/incidents') // +
const shiftsRouter = require('./routes/shifts') // +
const systemsRouter = require('./routes/systems') // +

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use('/favicon.ico', express.static(path.join(__dirname, 'public', 'images', 'favicon.ico')))

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/contractsRouter', contractsRouter) // +
app.use('/departmentsRouter', departmentsRouter) // +
app.use('/employeesRouter', employeesRouter) // +
app.use('/incidentsRouter', incidentsRouter) // +
app.use('/shifts', shiftsRouter) // +
app.use('/systems', systemsRouter) // +

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
