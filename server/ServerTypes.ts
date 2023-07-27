export type Image = {
  height: number;
  url: string;
  width: number;
}

export type Track = {
  name: string;
  release_date: Date;
  popularity: number;
  preview_url: string;
  artists: string[];
}

export type SpotifyData = {
  id: string;
  popularity: number;
  followers: number;
  genres: string[];
  images: Image[];
  top_tracks: Track[];
  external_urls: string[];
  href: string;
  type: string;
  uri: string;
}

export type Artist = {
  id: string;
  name: string;
  spotify_id: string;
}
