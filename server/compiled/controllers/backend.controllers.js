"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postArtistData = exports.postTracksData = exports.postSpotifyData = void 0;
const index_1 = __importDefault(require("../models/index"));
const uuid_1 = require("uuid");
// List of artists spotify ID's
const artistIdList = [
    "14rchXSv5I3gxgE6qNuMN2",
    "319gCjNoBJc8AaIPkWhCKH",
    "4CCjWYtowoZyWAl03Iih5P",
    "59fXT8REPhYypqMiXMxSKs",
    "3fRPt5kKn2lETY48z6kigv",
    "2siXaXrok89Fp1PZI7sn0s",
    "4M5b70A8aORXdyJVjRJ8du",
    "6W2nR7dEexKxsrLc4C4Xb9",
    "2LakckgvXEtJlKOYP6BO11",
    "7IrBqZo6diq3hV3GpUhrs2",
    "1nrJKGxkiSY6FjJRXcc9CB",
    "70P7as3HD8esc9Dx2TAR7o",
    "63h1vcgwz5lbgfiIyF6mcs",
    "3JYp3dC5wTBWagBRR5fjpk",
    "0YSI1Vwzd1u7wO7p3md4qD",
    "7iIrU7sHGT5yo0TOKIe6D9",
    "6AVWyEvyKJJwQjDHU8Eqaj",
    "5VFbrnGdINL3hcSOluMsCj",
    "0q8eApZJs5WDBxayY9769C",
    "2CMGIUxJXzUIEGt2jLpM5z",
];
// Following authHeader in the format: [Bearer authToken]. authToken lasts one hour, needs to be gotten via POST to spotify API
const authHeader = "Bearer BQCa50sIbjSnUsYeJIGUXiAROcqR8q4V2GFwYIn6M-geRdBzEDeqENlypN2ROR3UNqUI-zu5SASPmYAHO6TMXZ1geOP0L5xtNoo1q-Vckj3BRxEZjyk";
const baseUrl = "https://api.spotify.com/v1/artists/";
// Logic to fetch spotify statistics for all artists, and post it to our database
const fetchSpotifyData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(`${baseUrl}?ids=${artistIdList.join()}`, {
            headers: {
                Authorization: authHeader,
            },
        });
        const data = yield response.json();
        return data;
    }
    catch (err) {
        console.log(err);
        return err;
    }
});
const postSpotifyData = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const spotifyApiData = yield fetchSpotifyData();
        for (const element of spotifyApiData.artists) {
            if (element != null) {
                yield index_1.default.SpotifyDatum.create({
                    id: (0, uuid_1.v4)(),
                    spotify_id: element.id,
                    popularity: element.popularity,
                    followers: element.followers.total,
                    genres: element.genres,
                    images: element.images,
                    externalUrls: element.external_urls,
                    href: element.href,
                    type: element.type,
                    uri: element.uri,
                });
            }
        }
        ctx.status = 200;
    }
    catch (err) {
        ctx.status = 500;
        console.log(err);
        return err;
    }
});
exports.postSpotifyData = postSpotifyData;
// Logic to fetch top track data for all artists and post to our database
const fetchTopTracks = (artistId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(`${baseUrl}${artistId}/top-tracks?market=GB`, {
            headers: {
                Authorization: authHeader,
            },
        });
        const data = yield response.json();
        return data;
    }
    catch (err) {
        console.log(err);
        return err;
    }
});
const postTracksData = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        artistIdList.forEach((artist) => __awaiter(void 0, void 0, void 0, function* () {
            const topTrackData = yield fetchTopTracks(artist);
            yield Promise.all(topTrackData.tracks.map((track) => {
                const dataToSend = {
                    id: (0, uuid_1.v4)(),
                    spotify_id: artist,
                    name: track.name,
                    release_date: track.album.release_date,
                    popularity: track.popularity,
                    preview_url: track.preview_url,
                    images: track.album.images,
                    artists: track.artists.map((item) => item.name),
                };
                return index_1.default.TopTrack.create(dataToSend);
            }));
        }));
        ctx.status = 200;
    }
    catch (err) {
        ctx.status = 500;
        console.log(err);
        return err;
    }
});
exports.postTracksData = postTracksData;
// Logic to post data for all artists and post to our database
const postArtistData = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const spotifyApiData = yield fetchSpotifyData();
        for (const element of spotifyApiData.artists) {
            if (element != null) {
                yield index_1.default.Artist.create({
                    spotify_id: element.id,
                    name: element.name,
                });
            }
        }
        ctx.status = 200;
    }
    catch (err) {
        ctx.status = 500;
        console.log(err);
        return err;
    }
});
exports.postArtistData = postArtistData;
