const express = require('express')
const router = express.Router()

router.get('/v1/task', (req, res) => {
  res.send('teste')
})

module.exports = router
