const express = require('express')
const router = express.Router()
const Task = require('./../../models/task.model') 

router.get('/v1/task', (req, res) => {
  Task.findById(req.params.taskId)
    .then((task) => {
      res.send(task)
    })
})

router.post('/v1/task', (req, res) => {
  const task = new Task()

  task.description = req.body.description

  task.save( () => {
    res.send(task)
  })
})

module.exports = router