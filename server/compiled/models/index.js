"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../db"));
const sequelize_1 = require("sequelize");
const Spotify = db_1.default.define("spotify_data", {
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: (0, sequelize_1.literal)('gen_random_uuid()'),
        primaryKey: true,
    },
    popularity: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    followers: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    genres: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
        allowNull: false
    },
    images: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.JSON),
        allowNull: false
    },
    external_urls: {
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
    }
});
const Artist = db_1.default.define("artists", {
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: (0, sequelize_1.literal)('gen_random_uuid()'),
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    spotify_id: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
});
const Top_Tracks = db_1.default.define("top_tracks", {
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: (0, sequelize_1.literal)('gen_random_uuid()'),
        primaryKey: true,
    },
    track_list: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.JSON),
        allowNull: false
    },
});
Artist.hasMany(Spotify);
Spotify.belongsTo(Artist);
Artist.hasMany(Top_Tracks);
Top_Tracks.belongsTo(Artist);
exports.default = { Spotify, Artist, Top_Tracks };
