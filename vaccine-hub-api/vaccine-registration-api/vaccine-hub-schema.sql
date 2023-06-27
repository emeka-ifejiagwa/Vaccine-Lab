CREATE TABLE users (
    id SERIAL NOT NULL,
    password varchar(255) NOT NULL,
    first_name varchar(255) NOT NULL,
    last_name varchar(255) NOT NULL,
    email varchar(255) NOT NULL UNIQUE CHECK (POSITION('@' IN email) > 1),
    location varchar(255) NOT NULL,
    date TIMESTAMP NOT NULL,
    PRIMARY KEY(id) 
);