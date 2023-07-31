import axios from 'axios';
import type { External_Urls, Image, Artist, Track, SpotifyData, ArtistAndSpotify, SpotifyAndTracks, NameAndImageType } from './Types';
const baseUrl: string = 'http://localhost:3000/';

async function getArtistImagesAndNames() {
  try {
    const response = await axios.get(`${baseUrl}artistsAndSpotify`);
    const namesAndImages: NameAndImageType[] = [];
    for (const element of response.data) {
      namesAndImages.push({
        name: element.name,
        image: element.SpotifyData[0].images[1].url
      })
    }
    return namesAndImages;
  } catch (err) {
    console.log("Error fetching data from database::",err);
    return [];
  }
}

async function getOneArtistDetails(): Promise<SpotifyAndTracks> {
  try {
    const response = await axios.get(`${baseUrl}spotifyAndTracks/3JYp3dC5wTBWagBRR5fjpk`)
    const artist = response.data[0];
    console.log("DATA SENT FROM APICLIENT::",artist);
    const featuredArtist: SpotifyAndTracks = {
      spotify_id: artist.spotify_id,
      name: artist.name,
      createdAt: artist.createdAt,
      updatedAt: artist.updatedAt,
      SpotifyData: artist.SpotifyData,
      TopTracks: artist.TopTracks
    }
    return featuredArtist;
  } catch (err) {
    console.log("Error fetching data from database::",err);
    throw err
  }
}

export default { getArtistImagesAndNames, getOneArtistDetails };