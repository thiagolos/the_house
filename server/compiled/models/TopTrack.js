"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopTrack = void 0;
const sequelize_1 = require("sequelize");
class TopTrack extends sequelize_1.Model {
    static initModel(sequelize) {
        TopTrack.init({
            id: {
                type: sequelize_1.DataTypes.STRING,
                primaryKey: true,
            },
            spotify_id: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            name: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            release_date: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: false,
            },
            popularity: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
            },
            preview_url: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
            },
            artists: {
                type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
                allowNull: false,
            },
            images: {
                type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.JSON),
                allowNull: false,
            },
            createdAt: {
                type: sequelize_1.DataTypes.DATE,
            },
            updatedAt: {
                type: sequelize_1.DataTypes.DATE,
            },
        }, {
            sequelize,
        });
        return TopTrack;
    }
}
exports.TopTrack = TopTrack;
