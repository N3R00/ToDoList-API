const express = require('express')
const mongoose = require('mongoose')
const HTTP_PORT = process.env.HTTP_PORT || 8888;

const taskController = require('./http/controllers/task')

const app = express() 

app.get('/v1/task', taskController.listTasks)
app.post('/v1/task', taskController.createTask)

mongoose.connect('mongodb://localhost:27017/tasks')

mongoose.connection.on('open', () => {
  app.listen(HTTP_PORT, () => {
    console.log(`Listing on port ${HTTP_PORT}`)
  })
})

app.listen(80, () => {
    console.log('Escutando na porta 8888')
})
