const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = Schema({
    task: {
        type: String,
        description: String,
        required: true
    }
})

module.exports = mongoose.model('Task', TaskSchema)