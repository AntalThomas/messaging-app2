const db = require('../db/db')

const Chat = {
    getAllChats: (userId, friendId) => {
        const sql = `
            SELECT * FROM chats
            WHERE (sender = $1 AND receiver = $2)
            OR (receiver = $1 AND sender = $2)
        `

        return db   
            .query(sql, [userId, friendId])
            .then(dbRes => dbRes.rows)
    },
    insertIntoChat: (userId, friendId, message) => {
        const sql = `
            INSERT INTO chats(sender, receiver, message)
            VALUES ($1, $2, $3)
            RETURNING *
        `
        return db
            .query(sql, [userId, friendId, message])
            .then(dbRes => dbRes.rows[0])
    }
}

module.exports = Chat