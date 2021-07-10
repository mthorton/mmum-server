const {Sequelize} = require('sequelize');

const db = new Sequelize("postgres://postgres:PASSWORDHERE@localhost:5432/workout-log");

module.exports = db;