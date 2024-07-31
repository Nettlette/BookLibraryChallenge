const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class EditionAuthor extends Model {}

EditionAuthor.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        edition: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "edition",
                key: "id",
            },
        },
        author: {
            type: DataTypes.INTEGER,
            references: {
                model: "author",
                key: "id",
            },
        },
        note: {
            type: DataTypes.INTEGER,
            references: {
                model: "lookup",
                key: "id",
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "editionauthor",
    }
);

module.exports = EditionAuthor;