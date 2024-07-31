const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ChallengeElement extends Model {}

ChallengeElement.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        challenge: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "challenge",
                key: "id",
            },
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
        },
        count: {
            type: DataTypes.INTEGER,
        },
        order: {
            type: DataTypes.INTEGER
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "challengeelement",
    }
);

module.exports = ChallengeElement;