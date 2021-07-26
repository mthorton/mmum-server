const {Sequelize} = require('sequelize');

const db = new Sequelize("postgres://postgres:YourPasswordHere@localhost:5432/mmum-server");

module.exports = db;