const mongoose = require('mongoose');
const personSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: Number,
    favFood: {
        type: [String],
        default: []
    }


})

module.exports = mongoose.model('Person', personSchema)