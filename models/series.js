const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Series extends Model {}

Series.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        order: {
            type: DataTypes.DECIMAL,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "series",
    }
);

module.exports = Series;