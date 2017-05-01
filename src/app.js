const express = require('express')
const taskController = require('./http/controllers/task')

const app = express() 

app.use(taskController)

app.listen(80, () => {
    console.log('Escutando na porta 8888')
})
