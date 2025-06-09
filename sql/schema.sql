CREATE DATABASE likeme;

\c likeme

CREATE TABLE posts (
    id SERIAL,
    titulo VARCHAR(25),
    img VARCHAR(1000),
    description VARCHAR(255),
    likes INTEGER
);
