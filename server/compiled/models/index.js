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
const associations_1 = require("./associations");
const db_1 = __importDefault(require("../db"));
const models = (0, associations_1.initModels)(db_1.default);
const baseUrl = "https://api.spotify.com/v1/artists";
const fetchSpotifyData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(`${baseUrl}?ids=14rchXSv5I3gxgE6qNuMN2,319gCjNoBJc8AaIPkWhCKH,4CCjWYtowoZyWAl03Iih5P,59fXT8REPhYypqMiXMxSKs,3fRPt5kKn2lETY48z6kigv,2siXaXrok89Fp1PZI7sn0s,4M5b70A8aORXdyJVjRJ8du,6W2nR7dEexKxsrLc4C4Xb9,2LakckgvXEtJlKOYP6BO11,7IrBqZo6diq3hV3GpUhrs2,1nrJKGxkiSY6FjJRXcc9CB,70P7as3HD8esc9Dx2TAR7o,
    63h1vcgwz5lbgfiIyF6mcs,3JYp3dC5wTBWagBRR5fjpk,0YSI1Vwzd1u7wO7p3md4qD,7iIrU7sHGT5yo0TOKIe6D9,6AVWyEvyKJJwQjDHU8Eqaj,5VFbrnGdINL3hcSOluMsCj,0q8eApZJs5WDBxayY9769C,2CMGIUxJXzUIEGt2jLpM5z`, {
            headers: {
                Authorization: "Bearer BQD80SrtPMYK2EKlUl7jrdepSZkznLm7QI97XElAnB8HX-5vIqchcowYrBqgBdldxjvkcIY--kvA5D_NAWJEBpZx8_4hhXRPwSY9wB4tXEzqSMVa0sY"
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
const postSpotifyData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const spotifyApiData = yield fetchSpotifyData();
        // fetchSpotifyData().then(dataList => {console.log(dataList)});
        for (const element of spotifyApiData.artists) {
            yield models.SpotifyDatum.create({
                id: element.id,
                popularity: element.popularity,
                followers: element.followers,
                genres: element.genres,
                images: element.images,
                externalUrls: element.external_urls,
                href: element.href,
                type: element.type,
                uri: element.uri,
            });
        }
    }
    catch (err) {
        console.log(err);
        return err;
    }
});
postSpotifyData();
exports.default = models;
