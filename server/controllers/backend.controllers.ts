import models from "../models/index";
import { v4 } from 'uuid';

// List of artists spotify ID's

const artistIdList: string[] = ["14rchXSv5I3gxgE6qNuMN2","319gCjNoBJc8AaIPkWhCKH","4CCjWYtowoZyWAl03Iih5P","59fXT8REPhYypqMiXMxSKs","3fRPt5kKn2lETY48z6kigv","2siXaXrok89Fp1PZI7sn0s","4M5b70A8aORXdyJVjRJ8du","6W2nR7dEexKxsrLc4C4Xb9","2LakckgvXEtJlKOYP6BO11","7IrBqZo6diq3hV3GpUhrs2","1nrJKGxkiSY6FjJRXcc9CB","70P7as3HD8esc9Dx2TAR7o","63h1vcgwz5lbgfiIyF6mcs","3JYp3dC5wTBWagBRR5fjpk","0YSI1Vwzd1u7wO7p3md4qD","7iIrU7sHGT5yo0TOKIe6D9","6AVWyEvyKJJwQjDHU8Eqaj","5VFbrnGdINL3hcSOluMsCj","0q8eApZJs5WDBxayY9769C","2CMGIUxJXzUIEGt2jLpM5z"];

const baseUrl: string = "https://api.spotify.com/v1/artists/";

// Logic to fetch spotify statistics for all artists, and post it to our database

const fetchSpotifyData = async () => {
  try {
    const response = await fetch(`${baseUrl}?ids=${artistIdList.join()}`, {
      headers: {
        Authorization: "Bearer BQBKpui7clLqCIm3DraW-UOEgZCP6ZflRNwtyU23i7H3VPEi0fMR0u-ZyMkQzlANaF3xLBsaWNtxFAnJ86W7yEY_Px7EK1svxUatysnrnKVslHElkMY"
      },
    });
    const data = await response.json();
    console.log("DATA::",data)
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const postSpotifyData = async (ctx:any) => {
  try {
    const spotifyApiData = await fetchSpotifyData();
    for (const element of spotifyApiData.artists) {
      if (element != null) {
        console.log("ARTIST ELEMENT::",element);
        await models.SpotifyDatum.create({
          id: v4(),
          popularity: element.popularity,
          followers: element.followers.total,
          genres: element.genres,
          images: element.images,
          externalUrls: element.external_urls,
          href: element.href,
          type: element.type,
          uri: element.uri,
        });
      }
    }
    ctx.status = 200;
  } catch (err) {
    ctx.status = 500;
    console.log(err);
    return err;
  }
}


// Logic to fetch top track data for all artists and post to our database

const fetchTopTracks = async (artistId: string) => {
  try {
    const response = await fetch(`${baseUrl}${artistId}/top-tracks?market=GB`, {
      headers: {
        Authorization: "Bearer BQAobfcOG3tb2dGfDnBkObx3rNaup47PxSS0DhdSJR3-zeudwEsibZIpdFJRGeZE8zm9fX2oPyCpMbc8nBOoVtXjjX_RFbjeqFkRvcluqvBftKwWp18"
      },
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export const postTracksData = async (ctx: any) => {
  try {
    artistIdList.forEach(async (artist) => {
      const topTrackData = await fetchTopTracks(artist);
      await Promise.all(topTrackData.tracks.map((track:any) => {
        const dataToSend = {
          id: v4(),
          name: track.name,
          release_date: track.album.release_date,
          popularity: track.popularity,
          preview_url: track.preview_url,
          images: track.album.images,
          artists: track.artists.map((item:any) => item.name),
        }
        return models.TopTrack.create(dataToSend);
      }))
    });
    ctx.status = 200;
  } catch (err) {
    console.log(err)
    return err;
  }
}