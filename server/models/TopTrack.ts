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
  Sequelize,
} from "sequelize";

import type { Artist } from "./Artist";
import type { Image } from "../Types";

type TopTrackAssociations = "artist";

export class TopTrack extends Model<
  InferAttributes<TopTrack, { omit: TopTrackAssociations }>,
  InferCreationAttributes<TopTrack, { omit: TopTrackAssociations }>
> {
  declare id: string;
  declare spotify_id: string;
  declare name: string;
  declare release_date: string;
  declare popularity: number;
  declare preview_url?: string;
  declare artists: string[];
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
  declare images: Image[];

  // TopTrack belongsTo Artist
  declare artist?: NonAttribute<Artist>;
  declare getArtist: BelongsToGetAssociationMixin<Artist>;
  declare setArtist: BelongsToSetAssociationMixin<Artist, string>;
  declare createArtist: BelongsToCreateAssociationMixin<Artist>;

  declare static associations: {
    artist: Association<TopTrack, Artist>;
  };

  static initModel(sequelize: Sequelize): typeof TopTrack {
    TopTrack.init(
      {
        id: {
          type: DataTypes.STRING,
          primaryKey: true,
        },
        spotify_id: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        release_date: {
          type: DataTypes.DATEONLY,
          allowNull: false,
        },
        popularity: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        preview_url: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        artists: {
          type: DataTypes.ARRAY(DataTypes.STRING),
          allowNull: false,
        },
        images: {
          type: DataTypes.ARRAY(DataTypes.JSON),
          allowNull: false,
        },
        createdAt: {
          type: DataTypes.DATE,
        },
        updatedAt: {
          type: DataTypes.DATE,
        },
      },
      {
        sequelize,
      },
    );

    return TopTrack;
  }
}
