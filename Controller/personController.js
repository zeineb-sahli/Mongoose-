const Person = require('../models/person')

const createPerson = () => {
    let sou = new Person({ name: 'sou', age: 30, favFood: ['pizza', 'chappati'] })
    sou.save((e) => {
        if (e) {
            console.log('error')
        }
        else {

            console.log('data adde')
        }
    })
}

let persons = [
    { name: 'sou', age: 30, favFood: ['pizza', 'chappati'] },
    { name: 'bo7', age: 30, favFood: ['caviar', 'chappati'] },
    { name: 'htim', age: 20, favFood: ['mlawi', 'kosksi'] }
]

const createPersons = async () => {
    try {
        const personsList = await Person.create(persons)
        console.log(personsList)

    } catch (error) {
        console.error('error', error)
    }
}

const searchPerson = async (name) => {
    try {
        const personFound = await Person.find({ name: name })
        console.log(personFound)

    } catch (error) {
        console.log('person not found')
    }

}

const searchOne = async (food) => {

    try {
        const onePersonFound = await Person.findOne({ favFood: { $all: [food] } })
        console.log(onePersonFound)

    } catch (error) {
        console.error('error', error)

    }
}

const searchOneById = async (id) => {
    try {
        const foundId = await Person.findById(id)
        console.log(foundId)
    } catch (error) {
        console.error('error', error)
    }
}

const editFoodFav = async (id, newFood) => {
    return new Promise(async (resolve, reject) => {
        try {
            const personFound = await Person.findById(id);
            personFound.favFood.push(newFood);
            const newpersonFound = await personFound.save();
            resolve(newpersonFound);
        } catch (error) {
            reject(error);
        }
    });
}

const updateAge = async (enteredName) => {
    return new Promise((resolve, reject) => {
        Person.findOneAndUpdate({ name: enteredName }, { age: 20 }, { new: true }, (err, doc) => {
            if (err) {
                reject(err);
            }
            resolve(doc);
        })
    })
}

const deletePerson = async (id) => {
    return new Promise((resolve, reject) => {
        Person.findByIdAndRemove(id, (err, data) => {
            if (err) {
                reject(err)
            }
            resolve(data)
        })
    })
}


module.exports = {
    createPerson,
    createPersons, searchPerson, searchOne, searchOneById,
    editFoodFav, updateAge, deletePerson
}
