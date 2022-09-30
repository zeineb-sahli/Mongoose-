const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017';


const connectDb = async () => {
    try {
        await mongoose.connect(url);
        console.log('connected to db')

    } catch (error) {
        console.log('not connected to db')

    }
}

module.exports = connectDb