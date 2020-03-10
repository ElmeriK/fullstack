const mongoose = require('mongoose')

const url = 'deleted from git'

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(url)


const Person = mongoose.model('Person', {
  name: String,
  number: String,
  id: Number
})

if (process.argv[2] && process.argv[3]){
    console.log("adding person " + process.argv[2] + " number " + process.argv[3] + " to the directory")
    const person = new Person({
        name: process.argv[2],
        number: process.argv[3],
        id: Math.floor(Math.random() * 10000)
      })
    person
      .save()
      .then(response => {
        console.log("Person saved")
        mongoose.connection.close()
      })
} else {
    console.log("Puhelinluettelo:")
    Person
        .find({})
        .then(result => {
            result.forEach(person => {
              console.log(person.name, person.number)
            })
            mongoose.connection.close()
          })
}