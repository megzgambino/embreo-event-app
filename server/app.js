const express = require('express');
const app = express();
const server = require('http').createServer(app);
const PORT = 4000
const cors = require('cors');
const UserController = require('./controllers/UserController');
const EventController = require('./controllers/EventController');


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//users
app.post('/register', UserController.register)
app.post('/login', UserController.login)
app.get('/users', UserController.findAllUser)

//event
app.get('/events', EventController.showAllEvent)
app.get('/events/:id', EventController.showEvent)
app.post('/events', EventController.createEvent)
app.delete('/events/:id', EventController.deleteEvent)
app.patch('/events/:id', EventController.updateStatus)


server.listen(PORT, () => {
    console.log(`this app is listening to http://localhost:${PORT}`)
  })