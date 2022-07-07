const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()


//write json
app.use(
  express.urlencoded({
    extended: true
  })
);

app.use(express.json())

// API ROUTES

const routeRegistration = require('./routes/RegistrationRoute')
const routeLogin = require('./routes/LoginRoute')

app.use('/registrar', routeRegistration)
app.use('/login', routeLogin)

//Acess mongoDB Atlas
const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)

mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.kq4yuqe.mongodb.net/bancodaapi?retryWrites=true&w=majority`
).then(() => {
  console.log('Conectamos ao mongoDB Atlas!')
  app.listen(3000)

}).catch((err) => console.log(err))

