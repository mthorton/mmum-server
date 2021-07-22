const {Sequelize} = require('sequelize');

<<<<<<< HEAD
const sequelize = new Sequelize("postgres://postgres:password@localhost:5432/event-log");
=======
const db = new Sequelize("postgres://postgres:be91054cdf4d4e43b477314a861c133e@localhost:5432/mmum-server");
>>>>>>> e36ecd4eb9334e4d3679d2eb6d3782a56e37a0ed

module.exports = db;