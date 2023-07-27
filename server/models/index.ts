import sequelize from '../db';
import { DataTypes, literal } from 'sequelize';

const Spotify = sequelize.define("spotify_data", {
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
  external_urls: {
    type: DataTypes.JSON,
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

const Artist = sequelize.define("artists", {
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

const Top_Tracks = sequelize.define("top_tracks", {
  id: {
    type: DataTypes.UUID,
    defaultValue: literal('gen_random_uuid()'),
    primaryKey: true,
  },
  track_list: {
    type: DataTypes.ARRAY(DataTypes.JSON),
    allowNull: false
  },
});

Artist.hasMany(Spotify);
Spotify.belongsTo(Artist);

Artist.hasMany(Top_Tracks);
Top_Tracks.belongsTo(Artist);

export default { Spotify, Artist, Top_Tracks };