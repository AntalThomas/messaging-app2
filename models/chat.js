const db = require('../db/db')
const User = require('./user')

const Chat = {
    getAllChats: (userId, friendId) => {
        const sql = `
            SELECT * FROM chats
            WHERE (userId = $1 AND friendId = $2)
            OR (friendId = $1 AND userId = $2)
        `

        return db   
            .query(sql, [userId, friendId])
            .then(dbRes => dbRes.rows)
    },
    insertIntoChat: (userId, friendId) => {
        const sql = `
            INSERT INTO chats(userId, friendId)
            VALUES ($1, $2)
            RETURNING *
        `
        return db
            .query(sql, [userId, friendId])
            .then(dbRes => dbRes.rows)
    }
}

module.exports = Chat