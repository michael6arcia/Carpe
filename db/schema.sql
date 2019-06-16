CREATE DATABASE IF NOT EXISTS goals_db;
USE goals_db;

-- If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS goals;

-- Create the goals table
CREATE TABLE goals (
    id int NOT NULL AUTO_INCREMENT,
    goal_name varchar(255) NOT NULL,
    completed BOOL DEFAULT false,
    PRIMARY KEY (id)
);
