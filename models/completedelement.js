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
        challengesubscription: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "challengesubscription",
                key: "id",
            },
        },
        challengeelement: {
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
                model: "bookread",
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