import { sequelize } from '../db';
import { DataTypes, literal } from 'sequelize';

export const Spotify = sequelize.define("spotify_data", {
  id: {
    type: DataTypes.UUID,
    defaultValue: literal('gen_random_uuid()'),
    primaryKey: true,
  },
  popularity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  followers: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  genres: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false
  },
  images: {
    type: DataTypes.ARRAY(DataTypes.JSON),
    allowNull: false
  },
  top_tracks: {
    type: DataTypes.ARRAY(DataTypes.JSON),
    allowNull: false
  },
  external_urls: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false
  },
  href: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  uri: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

export const Artist = sequelize.define("artists", {
  id: {
    type: DataTypes.UUID,
    defaultValue: literal('gen_random_uuid()'),
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  spotify_id: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

Artist.hasMany(Spotify);
Spotify.belongsTo(Artist);