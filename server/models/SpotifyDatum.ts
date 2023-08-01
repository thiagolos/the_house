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

import { External_Urls } from "../Types";
import type { Artist } from "./Artist";
import type { Image } from "../Types";

type SpotifyDatumAssociations = "artist";

export class SpotifyDatum extends Model<
  InferAttributes<SpotifyDatum, { omit: SpotifyDatumAssociations }>,
  InferCreationAttributes<SpotifyDatum, { omit: SpotifyDatumAssociations }>
> {
  declare id: string;
  declare spotify_id: string;
  declare popularity: number;
  declare followers: number;
  declare genres: string[];
  declare images: Image[];
  declare externalUrls: External_Urls;
  declare href: string;
  declare type: string;
  declare uri: string;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  // SpotifyDatum belongsTo Artist
  declare artist?: NonAttribute<Artist>;
  declare getArtist: BelongsToGetAssociationMixin<Artist>;
  declare setArtist: BelongsToSetAssociationMixin<Artist, string>;
  declare createArtist: BelongsToCreateAssociationMixin<Artist>;

  declare static associations: {
    artist: Association<SpotifyDatum, Artist>;
  };

  static initModel(sequelize: Sequelize): typeof SpotifyDatum {
    SpotifyDatum.init(
      {
        id: {
          type: DataTypes.STRING,
          primaryKey: true,
        },
        spotify_id: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        popularity: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
        },
        followers: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
        },
        genres: {
          type: DataTypes.ARRAY(DataTypes.STRING),
          allowNull: false,
        },
        images: {
          type: DataTypes.ARRAY(DataTypes.JSON),
          allowNull: false,
        },
        externalUrls: {
          type: DataTypes.JSON,
          allowNull: false,
        },
        href: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        type: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        uri: {
          type: DataTypes.STRING,
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

    return SpotifyDatum;
  }
}
