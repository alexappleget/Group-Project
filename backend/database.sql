CREATE DATABASE userinfo;

CREATE TABLE userdata (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(100),
    message VARCHAR(255)
);