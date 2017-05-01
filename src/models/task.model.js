const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = Schema({
    description: {
        type: String
    }
})

module.exports = mongoose.model('Task', taskSchema)