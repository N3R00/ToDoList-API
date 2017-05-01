module.exports = (app) => {
  app.get('/v1/task', (req, res, next) => {
    res.send('teste')
    next()
  })
} 
