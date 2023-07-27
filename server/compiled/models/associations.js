"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initModels = exports.TopTrack = exports.Artist = exports.SpotifyDatum = void 0;
const SpotifyDatum_1 = require("./SpotifyDatum");
Object.defineProperty(exports, "SpotifyDatum", { enumerable: true, get: function () { return SpotifyDatum_1.SpotifyDatum; } });
const Artist_1 = require("./Artist");
Object.defineProperty(exports, "Artist", { enumerable: true, get: function () { return Artist_1.Artist; } });
const TopTrack_1 = require("./TopTrack");
Object.defineProperty(exports, "TopTrack", { enumerable: true, get: function () { return TopTrack_1.TopTrack; } });
function initModels(sequelize) {
    SpotifyDatum_1.SpotifyDatum.initModel(sequelize);
    Artist_1.Artist.initModel(sequelize);
    TopTrack_1.TopTrack.initModel(sequelize);
    SpotifyDatum_1.SpotifyDatum.belongsTo(Artist_1.Artist, {
        as: 'artist',
        foreignKey: 'artists_id'
    });
    Artist_1.Artist.hasMany(TopTrack_1.TopTrack, {
        as: 'topTracks',
        foreignKey: 'artists_id'
    });
    Artist_1.Artist.hasMany(SpotifyDatum_1.SpotifyDatum, {
        as: 'spotifyData',
        foreignKey: 'artists_id'
    });
    TopTrack_1.TopTrack.belongsTo(Artist_1.Artist, {
        as: 'artist',
        foreignKey: 'artists_id'
    });
    return {
        SpotifyDatum: SpotifyDatum_1.SpotifyDatum,
        Artist: Artist_1.Artist,
        TopTrack: TopTrack_1.TopTrack
    };
}
exports.initModels = initModels;
