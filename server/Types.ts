export type Artist = {
  external_urls: External_Urls
  href: string
  spotify_id: string
  name: string
  type: string
  uri: string
};

export type Image = {
  height: number
  url: string
  width: number
};

export type Album = {
  album_type: string
  total_tracks: number
  external_urls: External_Urls
  href: string
  id: string
  images: Image[]
  name: string
  release_date: string
}

export type Track = {
  album: Album
  id: string
  spotify_id: string
  name: string
  release_date: Date
  popularity: number
  preview_url: string
  artists: Artist[]
  images: Image[]
  createdAt: Date
  updatedAt: Date
}

export type External_Urls = {
  spotify: string
};
