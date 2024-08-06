const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class BookAuthor extends Model {}

BookAuthor.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        bookid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "book",
                key: "id",
            },
        },
        authorid: {
            type: DataTypes.INTEGER,
            references: {
                model: "author",
                key: "id",
            },
        },
        noteid: {
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
        modelName: "bookauthor",
    }
);

module.exports = BookAuthor;