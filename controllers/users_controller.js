const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const User = require("../models/user")

router.get('/', (req, res) => {
    const userId = req.session.userId
    if (userId) {
        User
            .findById(userId)
            .then(email => {
                User
                    .findByEmail(email)
                    .then(user => {
                        res.json({email: user.email, name: user.name})
                    })
            })
            
    } else {
        res.json({})
    }
})

router.post("/", (req, res) => {
    const { name, email, password } = req.body
    const passwordDigest = bcrypt.hashSync(password, bcrypt.genSaltSync(12), null)

    User
        .findByEmail(email)
        .then(user => {
            if (user === undefined) {
                User
                    .create(name, email, passwordDigest)
                    .then(email => res.json(email))
            } else {
                res.status(400).json({ error: "Email already in use!" })
            }
        })
})

module.exports = router