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
const index_1 = __importDefault(require("../models/index"));
function getArtistsAndSpotify(ctx) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield index_1.default.Artist.findAll({
                include: { model: index_1.default.SpotifyDatum },
            });
            ctx.status = 200;
            ctx.body = response;
            return response;
        }
        catch (err) {
            ctx.status = 500;
            ctx.body = err;
            console.log("error in getArtistsAndSpotify::", err);
            return err;
        }
    });
}
function getArtistTracks(ctx) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield index_1.default.TopTrack.findAll({
                where: {
                    spotify_id: ctx.params.id,
                },
            });
            ctx.status = 200;
            ctx.body = response;
            return response;
        }
        catch (err) {
            ctx.status = 500;
            ctx.body = err;
            console.log("error in getArtistTopTracks::", err);
            return err;
        }
    });
}
function getSpotifyAndTracks(ctx) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield index_1.default.Artist.findAll({
                where: {
                    spotify_id: ctx.params.id,
                },
                include: [{ model: index_1.default.SpotifyDatum }, { model: index_1.default.TopTrack }],
            });
            ctx.status = 200;
            ctx.body = response;
            return response;
        }
        catch (err) {
            ctx.status = 500;
            ctx.body = err;
            console.log("error in getSpotifyAndTopTracks::", err);
            return err;
        }
    });
}
exports.default = {
    getArtistsAndSpotify,
    getArtistTracks,
    getSpotifyAndTracks,
};
