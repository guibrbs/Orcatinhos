const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cors = require('cors')


const app = express()

//Config JSON response
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))
app.use(cors())


// Models
const User = require('./models/User')

//Public Route
app.get('/', (req, res) => {
  res.status(200).json({ msg: 'Bem vindo a nossa API!' })
})


app.get('/users', async (req, res)=> {
  try {
    const users = await User.find()
    res.json(users)
  } catch(error){res.status(5000).send(error)}
})

// Private Route
app.get("/user/:id", checkToken, async (req, res) => {
  const id = req.params.id

  //check if user exists
  const user = await User.findById(id, '-password')

  if (!user) {
    return res.status(404).json({ message: 'Usuário não encontrado!' })
  }

  res.status(200).json({ user })
})

//Middlware
function checkToken(req, res, next) {

  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(" ")[1]

  if (!token) {
    return res.status(401).json({ message: 'Acesso negado!' })
  }

  try {

    const secret = process.env.SECRET

    jwt.verify(token, secret)

    next()

  } catch (error) {
    res.status(400).json({ message: 'Token inválido!' })
  }
}

//Register User
app.post('/auth/register', async (req, res) => {

  const { name, email, password, confirmPassword } = req.body

  //validations
  if (!name) {
    return res.status(422).json({ message: 'O nome é obrigatório!' })
  }
  if (!email) {
    return res.status(422).json({ message: 'O email é obrigatório!' })
  }
  if (!password) {
    return res.status(422).json({ message: 'A senha é obrigatório!' })
  }

  if (password !== confirmPassword) {
    return res.status(422).json({ message: 'As senhas não conferem!' })
  }

  //check if user exists

  const userExists = await User.findOne({ email: email })

  if (userExists) {
    return res.status(422).json({ message: 'Por favor utilize outro email!' })

  }

  //create password

  const salt = await bcrypt.genSalt(12)
  const passwordHash = await bcrypt.hash(password, salt)

  //create user
  const user = new User({
    name,
    email,
    password: passwordHash,
  })

  try {

    await user.save()
    res.status(201).json({ message: 'Usuário criado com sucesso!' })

  } catch (error) {
    res.status(500).json({
      message: 'Houve um erro no servidor, tente novamente mais tarde!'
    })
  }
})

//Login User

app.post('/auth/login', async (req, res) => {

  const { email, password } = req.body

  if (!email) {
    return res.status(422).json({ message: 'O email é obrigatório!' })
  }
  if (!password) {
    return res.status(422).json({ message: 'A senha é obrigatório!' })
  }

  // check if user exists
  const user = await User.findOne({ email: email })
  const nameUser = user.name //Received name 

  if (!user) {
    return res.status(422).json({ message: 'Usuário não encontrado!' })

  }

  //check it password match
  const checkPassword = await bcrypt.compare(password, user.password)

  if (!checkPassword) {
    return res.status(422).json({ message: 'Senha inválida!' })
  }

  try {

    const secret = process.env.SECRET

    const token = jwt.sign({
      id: user._id,
    },
      secret,
    )
    res.status(200).json({
      nameUser,
      message: 'Autenticação realizada com sucesso!', token
    })

  } catch (error) {
    res.status(500).json({
      message: 'Houve um erro no servidor, tente novamente mais tarde!'
    })
  }

})


//Credenciais
const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS

mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@teste1.l29a3o8.mongodb.net/?retryWrites=true&w=majority`)
  .then(() => {

    app.listen(3001)
    console.log('Conectou ao Banco!')
  }
  ).catch((err) => console.log(err))

