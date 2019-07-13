const express = require('express')
const app = express()
const port =  process.env.PORT || 4000 
const bodyParser = require('body-parser')
const cors = require('cors')

const db = [

  {name:"Michael Mailliard",phone:"435-225-3601",email:"mjmailliard@gmail.com",is_favorite:true},
  {name:"Robert Frost", phone:"123-456-7890", email:"robert.frost@aol.com",is_favorite: false },
  {name:"Douglas Adams", phone:"123-456-7890", email:"dadams@theuniverse.com",is_favorite: false },  
  {name:"Stephen Spielberg", phone:"123-456-7890", email:"et@gmail.com",is_favorite: false }, 
  {name:"John Williams", phone:"123-456-7890", email:"jonny@epicthemes.com",is_favorite: false }, 
  {name:"Daniel Radcliffe", phone:"123-456-7890", email:"ur@wizard.com",is_favorite: false }, 
  {name:"Chuck Norris", phone:"***-***-****", email:"You don't contact Chuck Norris, he contacts you.",is_favorite: false }, 
  {name:"Richard Dean Anderson", phone:"123-456-7890", email:"macgyver@fixit.net",is_favorite: false }, 
  {name:"Emma Watson", phone:"123-456-7890", email:"ewatson@hogwarts.org",is_favorite: false }, 
  {name:"Emma Stone", phone:"123-456-7890", email:"lalala@hollywood.com",is_favorite: false }, 
  {name:"Mark Hamil", phone:"123-456-7890", email:"skywalker@jedi.net",is_favorite: false }, 
  {name:"Clark Kent", phone:"123-456-7890", email:"clark.kent@dailyplanet.com",is_favorite: false }, 
  {name:"Sean Connery", phone:"123-456-7890", email:"CallMeSir@hotmail.com",is_favorite: false }, 
  {name:"Mickey Mouse", phone:"123-456-7890", email:"ratman@disney.com",is_favorite: false }

]

app.use(bodyParser.json())
app.use(cors())

app.get('/', async (req, res) => { 
  console.log('getted')
 res.send(db)
})

app.post('/',  async (req,res) => {
  console.log('posted')
 await  db.push(req.body)
 res.send(req.body)
})

app.listen(port, () => console.log(`Listening on port ${port}!`))