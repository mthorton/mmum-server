const { DataTypes } = require("sequelize");
const db = require("../db");

const Log = db.define("log", {
    description: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    location: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    owner: {
        type: DataTypes.INTEGER,
    }
});

module.exports = Log;