"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const router = new koa_router_1.default();
const artist_data_controller_1 = __importDefault(require("./controllers/artist.data.controller"));
// import { postSpotifyData } from './controllers/backend.controllers';
// import { postTracksData } from './controllers/backend.controllers';
// import { postArtistData } from './controllers/backend.controllers';
// router.get('/test', postSpotifyData);
// router.get('/test', postTracksData);
// router.get('/test', postArtistData);
router.get("/artistsAndSpotify", artist_data_controller_1.default.getArtistsAndSpotify);
router.get("/topTracks/:id", artist_data_controller_1.default.getArtistTracks);
router.get("/spotifyAndTracks/:id", artist_data_controller_1.default.getSpotifyAndTracks);
exports.default = router;
