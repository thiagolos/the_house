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

export default { getArtistImagesAndNames };