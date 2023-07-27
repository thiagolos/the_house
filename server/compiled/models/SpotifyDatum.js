"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpotifyDatum = void 0;
const sequelize_1 = require("sequelize");
class SpotifyDatum extends sequelize_1.Model {
    static initModel(sequelize) {
        SpotifyDatum.init({
            id: {
                type: sequelize_1.DataTypes.UUID,
                primaryKey: true
            },
            popularity: {
                type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
                allowNull: false
            },
            followers: {
                type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
                allowNull: false
            },
            genres: {
                type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
                allowNull: false
            },
            images: {
                type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
                allowNull: false
            },
            externalUrls: {
                type: sequelize_1.DataTypes.JSON,
                allowNull: false
            },
            href: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            },
            type: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            },
            uri: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            },
            createdAt: {
                type: sequelize_1.DataTypes.DATE
            },
            updatedAt: {
                type: sequelize_1.DataTypes.DATE
            }
        }, {
            sequelize
        });
        return SpotifyDatum;
    }
}
exports.SpotifyDatum = SpotifyDatum;
