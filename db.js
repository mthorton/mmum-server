const {Sequelize} = require('sequelize');

const db = new Sequelize("postgres://postgres:be91054cdf4d4e43b477314a861c133e@localhost:5432/mmum-server");

module.exports = db;