"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Artist = void 0;
const sequelize_1 = require("sequelize");
class Artist extends sequelize_1.Model {
    static initModel(sequelize) {
        Artist.init({
            id: {
                type: sequelize_1.DataTypes.UUID,
                primaryKey: true
            },
            spotifyId: {
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
        return Artist;
    }
}
exports.Artist = Artist;
