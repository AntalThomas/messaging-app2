const express = require("express")
const router = express.Router()
const User = require("../models/user")

router.get('/', (req, res) => {
    User
        .selectAllUsers()
        .then(users => res.json(users))
})

module.exports = router