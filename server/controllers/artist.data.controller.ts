import { Sequelize } from "sequelize";
import models  from "../models/index";

async function getArtistsAndSpotify (ctx:any) {
  try {
    const response = await models.Artist.findAll({
      include: { model: models.SpotifyDatum }
    });
    ctx.status = 200;
    ctx.body = response;
    return response;
  } catch (err) {
    ctx.status = 500;
    ctx.body = err;
    console.log('error in getArtistsAndSpotify::',err);
    return err;
  }
}

async function getArtistTopTracks (ctx:any) {
  try {
    const response = await models.TopTrack.findAll({
      where: {
        spotify_id: ctx.params.artistId
      }
    });
  } catch (err) {
    ctx.status = 500;
    ctx.body = err;
    console.log(err);
    return err;
  }
}
export default { 
  getArtistsAndSpotify,
  getArtistTopTracks
}