export type External_Urls = {
  "spotify": string
}

export type Image = {
  height: number;
  url: string;
  width: number;
}

export type NameAndImageType = {
  name: string;
  image: string;
}

export type Artist = {
  spotify_id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export type Track = {
  id: string;
  spotify_id: string;
  name: string;
  release_date: Date;
  popularity: number;
  preview_url: string;
  artists: string[];
  images: Image[];
  createdAt: Date;
  updatedAt: Date;
}

export type SpotifyData = {
  id: string;
  spotify_id: string;
  popularity: number;
  followers: number;
  genres: string[];
  images: Image[];
  top_tracks: Track[];
  external_urls: External_Urls;
  href: string;
  type: string;
  uri: string;
  createdAt: Date;
  updatedAt: Date;
}

export type ArtistAndSpotify = {
  spotify_id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  SpotifyData: SpotifyData[];
}

export type SpotifyAndTracks = {
  spotify_id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  SpotifyData: SpotifyData[];
  TopTracks: Track[];
}