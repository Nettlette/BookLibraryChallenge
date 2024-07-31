const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Author extends Model {}

Author.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        firstname: {
            type: DataTypes.STRING,
        },
        lastname: {
            type: DataTypes.STRING,
        },
        originalPublishedDate: {
            type: DataTypes.DATE,
        },
        DOB: {
            type: DataTypes.DATE,
        },
        DOD: {
            type: DataTypes.DATE,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "author",
    }
);

module.exports = Author;