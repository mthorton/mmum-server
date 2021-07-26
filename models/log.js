const { DataTypes } = require("sequelize");
const db = require("../db");

const Log = db.define("log", {
    title: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    date: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    owner_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

module.exports = Log;