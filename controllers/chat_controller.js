const express = require("express")
const router = express.Router()
const Chat = require('../models/chat')

router.get('/:id', (req, res) => {
    const userId = req.session.userId
    const friendId = req.params.id
    
    Chat
        .getAllChats(userId, friendId)
        .then(chats => res.json(chats))
})

module.exports = router