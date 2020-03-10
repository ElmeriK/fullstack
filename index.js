const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const Person = require('./models/person')

app.use(bodyParser.json())
app.use(cors())
app.use(express.static('build'))


app.get('/api/persons', (request, response) => {
  Person
  .find({})
  .then(persons => {
    response.json(persons.map(formatPerson))
  })
  .catch(error => {
    console.log(error)
  })
})

//This dosent work with the mongoDB and wasnt required
app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)

  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

const formatPerson = (person) => {
  return {
    name: person.name,
    number: person.number,
    id: person._id
  }
}

const generateId = () => {
  const random = Math.floor(Math.random() * 10000); 
  return random
}

app.post('/api/persons', (request, response) => {
  const body = request.body

  if (body.name === undefined || body.number === undefined) {
    return response.status(400).json({ error: 'content missing' })
  }

  const person = new Person({
        name: body.name,
        number: body.number,
        id: generateId()
      })
    person
      .save()
      .then(savedPerson => {
        response.json(savedPerson)
      })
      .catch(error => {
        console.log(error)
      })
})

app.delete('/api/persons/:id', (request, response) => {
  Person
    .findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => {
      response.status(400).send({ error: 'malformatted id' })
    })
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})