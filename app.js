// module imports
const express = require('express')
const bodyParser = require('body-parser')

// user module imports
const taskController = require('./controllers/TaskController')
const userController = require('./controllers/UserController')
const articleController = require('./controllers/ArticleController')
const scheduleController = require('./controllers/SchedController')

// mongoose/mongoDB
require('./config/db')

// accepted API keys
const apikeys = ['anapikey', 'anapikey2']

console.log('Starting API')
const app = express()
const port = parseInt(process.argv[2], 10) || 3001

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// console logging
app.use((req, res, next) => {
  console.log(req.ip + ' ' + req.method + ': ' + req.originalUrl + ' ' + new Date().toISOString()),
  next()
})

// non-REST access
app.get('/', (req, res) => {
  res.send("This is a RESTful API, but there's nothing here!")
})

// authentication middleware
function authenticate (req, res, next) {
  if (!req.headers.authorization || !apikeys.includes(req.headers.authorization)) {
    return res.status(403).send({ message: 'Modifying the DB requires an API key.' })
  }
  next()
}

// endpoints

// tasks

app.route('/tasks')
  .get(taskController.listAllTasks)
  .post(taskController.createNewTask)

app.route('/tasks/:taskid')
  .get(taskController.readTask)
  .put(taskController.updateTask)
  .delete(taskController.deleteTask)

app.route('/byauthor/:createdby')
  .get(taskController.searchAuthor)

// users

app.route('/users')
  .get(userController.listAllUsers)
  .post(userController.createNewUser)

app.route('/users/:userid')
  .get(userController.getUser)
  .delete(userController.deleteUser)

// articles

app.route('/articles')
  .get(articleController.listAllArticles)
  .post(articleController.createNewArticle)
  .delete(articleController.deleteAllArticles)

app.route('/articles/:articleid')
  .get(articleController.getArticle)
  .delete(articleController.deleteArticle)

// schedules

app.route('/schedules')
  .post(authenticate, scheduleController.addSchedule)
  .get(scheduleController.getAllSchedule)
  .delete(authenticate, scheduleController.deleteAllSchedule)

app.route('/schedules/:date')
  .get(scheduleController.getDaySchedule)
  .delete(authenticate, scheduleController.removeSchedule)

app.route('/schedules/archive/:year/:month')
  .get(scheduleController.getMonthSchedule)

// start server

app.listen(port, () => {
  console.log(`Server running at locahost:${port}.`)
})
