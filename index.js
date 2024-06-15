const express = require('express')
const mongoose =require('mongoose');
const user = require('./models/user')
const note = require('./models/note')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
const port = 3000




mongoose.connect('mongodb://souph:Yuu%400759258320@localhost:27017/?tlsAllowInvalidHostnames=true&tlsAllowInvalidCertificates=true&authMechanism=DEFAULT&tls=true', 
  console.log("success")
)









// end points to serve the HTLM
app.get('/', (req, res) => {
res.sendFile("pages/index.html", {root: __dirname})
})

app.get('/login', (req, res) => {
  res.sendFile("pages/login.html", {root: __dirname})
})

app.get('/signUp', (req, res) => {
  res.sendFile("pages/signUp.html", {root: __dirname})
})

// End points for APIs
app.post('/getnotes', (req, res) => {
let user = User.create(req.body)
  res.status(200).json({success: true, user: user})
})

app.post('/Login', async(req, res) => {
  const {userToken } = req.body
  let user = await User.findOne(req.body)
  if(!user){
    res.status(200).json({success: false, message: "No user found"})
  }
  else{
    res.status(200).json({success: true, user:{email: user.email}, message: "user found"})


  }
  
})

app.post('/SingUp', async(req, res) => {
  const {userToken } = req.body
  
  console.log(req.body)
  let user = await User.create(req.body)
  res.sendFile("pages/about.html", {root: __dirname})
})

app.post('/addnote', async (req, res) => {
  const {userToken } = req.body
  let note = await Note.create(req.body)
  res.status(200).json({success: true, note})
})

app.post('/deletenote', (req, res) => {
  const {userToken } = req.body
  res.sendFile("pages/about.html", {root: __dirname})
})


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
}) 

  