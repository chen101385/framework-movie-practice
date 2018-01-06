
DROP DATABASE IF EXISTS movies;

CREATE DATABASE movies;

USE movies;

CREATE TABLE movies (
title varchar(50),
overview varchar(1024),
id int NOT NULL AUTO_INCREMENT,
PRIMARY KEY(id)
);