const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const User = require('../models/user')

router.post('/', (req, res) => {
    const { email, password } = req.body

    User
    .findByEmail(email)
    .then(user => {
        if (user === undefined) {
            res.status(400).json({ error: "email or password is incorrect"})
        } else {
            const isValidPassword = bcrypt.compareSync(password, user.password_digest)

            if (user && isValidPassword) {
                req.session.userId = user.id
                res.json({email: user.email, name: user.name, id: user.id})
                console.log(`${user.name} signed in.`)
            }
        }
    })
})

router.get('/', (req, res) => {
    const userId = req.session.userId

    if (userId) {
        User
        .findById(userId)
        .then(email => res.json({ result: 'successful', email: email }))
    } else {
        res.json({})
    }
})

router.delete("/", (req, res) => {
    req.session.destroy(error => {
        res.clearCookie("user_sid")
        res.json({ success: true})
        console.log(`User signed out.`)
    })
})

module.exports = router 