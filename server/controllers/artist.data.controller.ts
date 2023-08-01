import models from "../models/index";
import Koa from 'koa';

async function getArtistsAndSpotify(ctx: Koa.Context) {
  try {
    const response = await models.Artist.findAll({
      include: { model: models.SpotifyDatum },
    });
    ctx.status = 200;
    ctx.body = response;
    return response;
  } catch (err) {
    ctx.status = 500;
    ctx.body = err;
    console.log("error in getArtistsAndSpotify::", err);
    return err;
  }
}

async function getArtistTracks(ctx: Koa.Context) {
  try {
    const response = await models.TopTrack.findAll({
      where: {
        spotify_id: ctx.params.id,
      },
    });
    ctx.status = 200;
    ctx.body = response;
    return response;
  } catch (err) {
    ctx.status = 500;
    ctx.body = err;
    console.log("error in getArtistTopTracks::", err);
    return err;
  }
}

async function getSpotifyAndTracks(ctx: Koa.Context) {
  try {
    const response = await models.Artist.findAll({
      where: {
        spotify_id: ctx.params.id,
      },
      include: [{ model: models.SpotifyDatum }, { model: models.TopTrack }],
    });
    ctx.status = 200;
    ctx.body = response;
    return response;
  } catch (err) {
    ctx.status = 500;
    ctx.body = err;
    console.log("error in getSpotifyAndTopTracks::", err);
    return err;
  }
}

export default {
  getArtistsAndSpotify,
  getArtistTracks,
  getSpotifyAndTracks,
};
