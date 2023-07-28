import {
  Association,
  CreationOptional,
  DataTypes,
  HasManyGetAssociationsMixin,
  HasManySetAssociationsMixin,
  HasManyAddAssociationMixin,
  HasManyAddAssociationsMixin,
  HasManyCreateAssociationMixin,
  HasManyRemoveAssociationMixin,
  HasManyRemoveAssociationsMixin,
  HasManyHasAssociationMixin,
  HasManyHasAssociationsMixin,
  HasManyCountAssociationsMixin,
  InferCreationAttributes,
  InferAttributes,
  Model,
  NonAttribute,
  Sequelize
} from 'sequelize'
import type { SpotifyDatum } from './SpotifyDatum'
import type { TopTrack } from './TopTrack'

type ArtistAssociations = 'topTracks' | 'spotifyData'

export class Artist extends Model<
  InferAttributes<Artist, {omit: ArtistAssociations}>,
  InferCreationAttributes<Artist, {omit: ArtistAssociations}>
> {
  declare id: string
  declare spotifyId: string
  declare name: string
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>

  // Artist hasMany TopTrack
  declare topTracks?: NonAttribute<TopTrack[]>
  declare getTopTracks: HasManyGetAssociationsMixin<TopTrack>
  declare setTopTracks: HasManySetAssociationsMixin<TopTrack, number>
  declare addTopTrack: HasManyAddAssociationMixin<TopTrack, number>
  declare addTopTracks: HasManyAddAssociationsMixin<TopTrack, number>
  declare createTopTrack: HasManyCreateAssociationMixin<TopTrack>
  declare removeTopTrack: HasManyRemoveAssociationMixin<TopTrack, number>
  declare removeTopTracks: HasManyRemoveAssociationsMixin<TopTrack, number>
  declare hasTopTrack: HasManyHasAssociationMixin<TopTrack, number>
  declare hasTopTracks: HasManyHasAssociationsMixin<TopTrack, number>
  declare countTopTracks: HasManyCountAssociationsMixin
  
  // Artist hasMany SpotifyDatum
  declare spotifyData?: NonAttribute<SpotifyDatum[]>
  declare getSpotifyData: HasManyGetAssociationsMixin<SpotifyDatum>
  declare setSpotifyData: HasManySetAssociationsMixin<SpotifyDatum, string>
  declare addSpotifyDatum: HasManyAddAssociationMixin<SpotifyDatum, string>
  declare addSpotifyData: HasManyAddAssociationsMixin<SpotifyDatum, string>
  declare createSpotifyDatum: HasManyCreateAssociationMixin<SpotifyDatum>
  declare removeSpotifyDatum: HasManyRemoveAssociationMixin<SpotifyDatum, string>
  declare removeSpotifyData: HasManyRemoveAssociationsMixin<SpotifyDatum, string>
  declare hasSpotifyDatum: HasManyHasAssociationMixin<SpotifyDatum, string>
  declare hasSpotifyData: HasManyHasAssociationsMixin<SpotifyDatum, string>
  declare countSpotifyData: HasManyCountAssociationsMixin
  
  declare static associations: {
    topTracks: Association<Artist, TopTrack>,
    spotifyData: Association<Artist, SpotifyDatum>
  }

  static initModel(sequelize: Sequelize): typeof Artist {
    Artist.init({
      id: {
        type: DataTypes.UUID,
        primaryKey: true
      },
      spotifyId: {
        type: DataTypes.STRING,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      }
    }, {
      sequelize
    })
    
    return Artist
  }
}