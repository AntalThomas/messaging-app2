const express = require("express")
const router = express.Router()
const Chat = require('../models/chat')

router.post('/', (req, res) => {
    const userId = req.session.userId
    const friendId = req.body.friendId
    
    Chat
    .getAllChats(userId, friendId)
    .then(chats => res.json(chats))
})

router.post('/send/:id', (req, res) => {
    const userId = req.session.userId
    const friendId = req.params.id
    const message = req.body.message

    Chat
    .insertIntoChat(userId, friendId, message)
    .then(chats => res.json(chats))
})

module.exports = router