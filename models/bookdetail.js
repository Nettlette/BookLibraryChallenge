const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class BookDetail extends Model {}

BookDetail.init(
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
        detailid: {
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
        modelName: "bookdetail",
    }
);

module.exports = BookDetail;