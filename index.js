
const express = require('express');
const port = 5000
const connectDb = require('./config/connectDb');
const { createPerson,createPersons, searchPerson, searchOne, searchOneById, editFoodFav, updateAge, deletePerson } = require('./Controller/personController')

const app = express();
app.listen(port, e => {
    e ? console.log('server failed') : console.log('server is running on' + port)
})
// let sou = new Person({ name: 'sou', age: 30, favFood: ['pizza', 'chappati'] })
// console.log(sou)

connectDb()
createPerson()
createPersons()
searchPerson('bo7')
searchOne('chappati')
searchOneById("631a1f0163282a57d9d40ca6")
editFoodFav("631a1f0163282a57d9d40ca6", "3osbaen")
    .then((userWithNewFood) => {
        console.log(userWithNewFood);
    })
    .catch((err) => {
        console.error(err);
    });
updateAge('sou').then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})

deletePerson("631a1f0163282a57d9d40ca6").then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})

