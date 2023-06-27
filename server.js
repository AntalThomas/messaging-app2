const express = require('express')

// Middlewares
const logger = require('./middlewares/logger.js')
const sessions = require('./middlewares/sessions.js')

// Controllers
const sessionsController = require('./controllers/sessions_controller.js')
const usersController = require('./controllers/users_controller.js')
const getFriendsController = require('./controllers/getFriends_controller.js')
const chatController = require('./controllers/chat_controller.js')

// Start and listen to the server
const app = express()
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`listening on http://localhost:${port}`))

app.use(logger)// Log request info to terminal
app.use(express.static('client')) // Send back SPA
app.use(express.json())
app.use(sessions)

// Controller response to user
app.use('/api/sessions', sessionsController)
app.use('/api/users', usersController)
app.use('/api/getFriends', getFriendsController)
app.use('/api/chats', chatController)