CREATE DATABASE messaging_app_db;
\c messaging_app_db

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name TEXT,
    email TEXT,
    password_digest TEXT
);

CREATE TABLE chats(
    id SERIAL PRIMARY KEY,
    sender TEXT,
    receiver TEXT,
    message TEXT
);