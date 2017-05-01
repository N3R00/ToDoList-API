const express = require('express')
const bodyParser = require('body-parser')
const taskCtrl = require('./http/controllers/task.controller')
const mongoose = require('mongoose')

const HTTP_PORT = process.env.HTTP_PORT || 80

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(taskCtrl)

mongoose.connect('mongodb://todolist:todolist@mongo:27017/todolist')

mongoose.connection.on('open', () => {
    app.listen(HTTP_PORT, () => {
        console.log(`Escutando na porta ${HTTP_PORT}`)
    })
})