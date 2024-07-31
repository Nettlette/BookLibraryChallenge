const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class BooksRead extends Model {}

BooksRead.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "user",
                key: "id",
            },
        },
        edition: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "edition",
                key: "id",
            },
        },
        startDate: {
            type: DataTypes.DATE,
        },
        endDate: {
            type: DataTypes.DATE,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "booksread",
    }
);

module.exports = BooksRead;