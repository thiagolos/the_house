import models from "./models/index";
import { v4 } from 'uuid';

const baseUrl:string = "https://api.spotify.com/v1/artists";

const fetchSpotifyData = async () => {
  try {
    const response = await fetch(`${baseUrl}?ids=14rchXSv5I3gxgE6qNuMN2,319gCjNoBJc8AaIPkWhCKH,4CCjWYtowoZyWAl03Iih5P,59fXT8REPhYypqMiXMxSKs,3fRPt5kKn2lETY48z6kigv,2siXaXrok89Fp1PZI7sn0s,4M5b70A8aORXdyJVjRJ8du,6W2nR7dEexKxsrLc4C4Xb9,2LakckgvXEtJlKOYP6BO11,7IrBqZo6diq3hV3GpUhrs2,1nrJKGxkiSY6FjJRXcc9CB,70P7as3HD8esc9Dx2TAR7o,
    63h1vcgwz5lbgfiIyF6mcs,3JYp3dC5wTBWagBRR5fjpk,0YSI1Vwzd1u7wO7p3md4qD,7iIrU7sHGT5yo0TOKIe6D9,6AVWyEvyKJJwQjDHU8Eqaj,5VFbrnGdINL3hcSOluMsCj,0q8eApZJs5WDBxayY9769C,2CMGIUxJXzUIEGt2jLpM5z`, {
      headers: {
        Authorization: "Bearer BQD80SrtPMYK2EKlUl7jrdepSZkznLm7QI97XElAnB8HX-5vIqchcowYrBqgBdldxjvkcIY--kvA5D_NAWJEBpZx8_4hhXRPwSY9wB4tXEzqSMVa0sY"
      },
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const postSpotifyData = async (ctx:any) => {
  try {
    const spotifyApiData = await fetchSpotifyData();

    // fetchSpotifyData().then(dataList => {console.log(dataList)});

    for (const element of spotifyApiData.artists) {
      console.log("ARTIST ELEMENT::",element);
      console.log("POPULARITY SCORE::",element.popularity)
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
      })
    }
    ctx.status = 200;
  } catch (err) {
    ctx.status = 500;
    console.log(err);
    return err;
  }
}