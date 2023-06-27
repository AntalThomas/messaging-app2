CREATE DATABASE messaging_app_db;
\c messaging_app_db

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name TEXT,
    email TEXT,
    password_digest TEXT
);