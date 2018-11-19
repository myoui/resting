const User = require('../models/User')

exports.listAllUsers = (req, res) => {
  User.find({}, (err, user) => {
    if (err) {
      res.status(500).send(err)
    }
    res.status(200).json(user)
  })
}

exports.createNewUser = (req, res) => {
  let newUser = new User(req.body)
  newUser.save((err, user) => {
    if (err) {
      res.status(500).send(err)
    }
    res.status(201).json(user)
  })
}

exports.getUser = (req, res) => {
  User.findOne({ _id: req.params.userid }, (err, user) => {
    if (err) {
      res.status(500).send(err)
    }
    res.status(200).json(user)
  })
}
exports.deleteUser = (req, res) => {
  User.deleteOne({ _id: req.params.userid }, (err, user) => {
    if (err) {
      res.status(500).send(err)
    }
    res.status(200).json({ message: `User ID:${user._id}successfully deleted.` })
  })
}
