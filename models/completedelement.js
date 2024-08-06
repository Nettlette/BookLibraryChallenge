const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class CompletedElement extends Model {}

CompletedElement.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        challengesubscriptionid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "challengesubscription",
                key: "id",
            },
        },
        challengeelementid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "challengeelement",
                key: "id",
            },
        },
        bookread: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "booksread",
                key: "id",
            },
        },
        completeddate: {
            type: DataTypes.DATE,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "completedelement",
    }
);

module.exports = CompletedElement;