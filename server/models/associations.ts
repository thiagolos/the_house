import type { Sequelize } from "sequelize";
import { SpotifyDatum } from "./SpotifyDatum";
import { Artist } from "./Artist";
import { TopTrack } from "./TopTrack";

export { SpotifyDatum, Artist, TopTrack };

export function initModels(sequelize: Sequelize) {
  SpotifyDatum.initModel(sequelize);
  Artist.initModel(sequelize);
  TopTrack.initModel(sequelize);

  SpotifyDatum.belongsTo(Artist, {
    foreignKey: "spotify_id",
  });

  TopTrack.belongsTo(Artist, {
    foreignKey: "spotify_id",
  });

  Artist.hasMany(SpotifyDatum, {
    foreignKey: "spotify_id",
  });

  Artist.hasMany(TopTrack, {
    foreignKey: "spotify_id",
  });

  return {
    SpotifyDatum,
    Artist,
    TopTrack,
  };
}
