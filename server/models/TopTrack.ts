import {
  Association,
  BelongsToGetAssociationMixin,
  BelongsToSetAssociationMixin,
  BelongsToCreateAssociationMixin,
  CreationOptional,
  DataTypes,
  InferCreationAttributes,
  InferAttributes,
  Model,
  NonAttribute,
  Sequelize
} from 'sequelize'
import type { Artist } from './Artist'

type TopTrackAssociations = 'artist'

export class TopTrack extends Model<
  InferAttributes<TopTrack, {omit: TopTrackAssociations}>,
  InferCreationAttributes<TopTrack, {omit: TopTrackAssociations}>
> {
  declare id: CreationOptional<string>
  declare name: string
  declare releaseDate: string
  declare popularity: number
  declare previewUrl: string
  declare artists: string[]
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>

  // TopTrack belongsTo Artist
  declare artist?: NonAttribute<Artist>
  declare getArtist: BelongsToGetAssociationMixin<Artist>
  declare setArtist: BelongsToSetAssociationMixin<Artist, string>
  declare createArtist: BelongsToCreateAssociationMixin<Artist>
  
  declare static associations: {
    artist: Association<TopTrack, Artist>
  }

  static initModel(sequelize: Sequelize): typeof TopTrack {
    TopTrack.init({
      id: {
        type: DataTypes.UUID,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      releaseDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      popularity: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      previewUrl: {
        type: DataTypes.STRING,
        allowNull: false
      },
      artists: {
        type: DataTypes.ARRAY(DataTypes.STRING),
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
    
    return TopTrack
  }
}