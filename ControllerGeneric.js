const Task = require('./models/Task')

exports.listAllTasks = (req, res) => {
  Task.find({}, (err, task) => {
    if (err) {
      res.status(500).send(err)
    }
    console.log('Task root requested.')
    res.status(200).json(task)
  })
}

exports.createNewTask = (req, res) => {
  let newTask = new Task(req.body)
  newTask.save((err, task) => {
    if (err) {
      res.status(500).send(err)
    }
    console.log('New task created.')
    res.status(201).json(task)
  })
}

exports.readTask = (req, res) => {
  Task.findById(req.params.taskid, (err, task) => {
    if (err) {
      res.status(500).send(err)
    }
    console.log(`GET: Task.ID: ${task._id}`)
    res.status(200).json(task)
  })
}

exports.updateTask = (req, res) => {
  Task.findOneAndUpdate(
    { _id: req.params.taskid },
    req.body,
    { new: true },
    (err, task) => {
      if (err) {
        res.status(500).send(err)
      }
      console.log(`PUT: Task.ID: ${task._id}`)
      res.status(200).json(task)
    }
  )
}

exports.deleteTask = (req, res) => {
  Task.deleteOne({ _id: req.params.taskid }, (err, task) => {
    if (err) {
      res.status(404).send(err)
    }
    console.log(`DELETE: Task.ID: ${task._id}`)
    res.status(200).json({ message: 'Task successfully deleted' })
  })
}
