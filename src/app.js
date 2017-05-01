const express = require('express')
const taskController = require('./http/controllers/task')

const app = express() 

app.get('/v1/task', taskController.listTasks)
app.post('/v1/task', taskController.createTask)

app.listen(80, () => {
    console.log('Escutando na porta 8888')
})
