const listTasks = (req, res, next) => {
  res.send('teste')
  next()
}

const createTask = (req, res, next) => {
  res.send('criando task')
  next()
}

module.exports = {
  listTasks,
  createTask
}
