const Sequelize = require('sequelize');

const sequelize = new Sequelize("postgres://postgres:YourPasswordHere@localhost:5432/event-log");

module.exports = sequelize;