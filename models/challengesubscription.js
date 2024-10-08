const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ChallengeSubscription extends Model {}

ChallengeSubscription.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        challengeid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "challenge",
                key: "id",
            },
        },
        userid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "user",
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
        modelName: "challengesubscription",
    }
);

module.exports = ChallengeSubscription;