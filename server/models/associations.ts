import type { Sequelize, Model } from 'sequelize'
import { SpotifyDatum } from './SpotifyDatum'
import { Artist } from './Artist'
import { TopTrack } from './TopTrack'

export {
  SpotifyDatum,
  Artist,
  TopTrack
}

export function initModels(sequelize: Sequelize) {
  SpotifyDatum.initModel(sequelize)
  Artist.initModel(sequelize)
  TopTrack.initModel(sequelize)

  SpotifyDatum.belongsTo(Artist, {
    as: 'artist',
    foreignKey: 'artists_id'
  })
  Artist.hasMany(TopTrack, {
    as: 'topTracks',
    foreignKey: 'artists_id'
  })
  Artist.hasMany(SpotifyDatum, {
    as: 'spotifyData',
    foreignKey: 'artists_id'
  })
  TopTrack.belongsTo(Artist, {
    as: 'artist',
    foreignKey: 'artists_id'
  })

  return {
    SpotifyDatum,
    Artist,
    TopTrack
  }
}
