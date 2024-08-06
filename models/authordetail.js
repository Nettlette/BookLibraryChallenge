const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class AuthorDetail extends Model {}

AuthorDetail.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        authorid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "author",
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
        modelName: "authordetail",
    }
);

module.exports = AuthorDetail;