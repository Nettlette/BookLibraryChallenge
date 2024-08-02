const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Edition extends Model {}

Edition.init(
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
        publisher: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: "lookup",
                key: "id",
            },
        },
        isbn10: {
            type: DataTypes.STRING,
        },
        isbn13: {
            type: DataTypes.STRING,
        },
        asin: {
            type: DataTypes.STRING,
        },
        lccn: {
            type: DataTypes.STRING,
        },
        publishedDate: {
            type: DataTypes.DATE,
        },
        isBC: {
            type: DataTypes.BOOLEAN,
        },
        language: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: "lookup",
                key: "id",
            },
        },
        numpages: {
            type: DataTypes.INTEGER,
        },
        audiolength: {
            type: DataTypes.DECIMAL
        },
        details: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "edition",
    }
);

module.exports = Edition;