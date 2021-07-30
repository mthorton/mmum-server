const { DataTypes } = require("sequelize");
const db = require("../db");

const Log = db.define("log", {
    date: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
<<<<<<< HEAD
    description: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    date: {
        type: DataTypes.STRING(10),
=======
    title: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING(100),
>>>>>>> a1ddfba2c45c1ed50c16330df2a773727aeddb19
        allowNull: false,
    },
    definition: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    owner_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

module.exports = Log;