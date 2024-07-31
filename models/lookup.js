const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Lookup extends Model {}

Lookup.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        class: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
        },
        note: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "lookup",
    }
);

module.exports = Lookup;