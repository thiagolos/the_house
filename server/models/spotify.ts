import databaseModels from './index';

const baseUrl:string = "https://api.spotify.com/v1/artists";

const fetchSpotifyData = async () => {
  try {
    const response = await fetch(`${baseUrl}?ids=14rchXSv5I3gxgE6qNuMN2,319gCjNoBJc8AaIPkWhCKH,4CCjWYtowoZyWAl03Iih5P,59fXT8REPhYypqMiXMxSKs,3fRPt5kKn2lETY48z6kigv,2siXaXrok89Fp1PZI7sn0s,4M5b70A8aORXdyJVjRJ8du,6W2nR7dEexKxsrLc4C4Xb9,2LakckgvXEtJlKOYP6BO11,7IrBqZo6diq3hV3GpUhrs2,1nrJKGxkiSY6FjJRXcc9CB,70P7as3HD8esc9Dx2TAR7o,
    63h1vcgwz5lbgfiIyF6mcs,3JYp3dC5wTBWagBRR5fjpk,0YSI1Vwzd1u7wO7p3md4qD,7iIrU7sHGT5yo0TOKIe6D9,6AVWyEvyKJJwQjDHU8Eqaj,5VFbrnGdINL3hcSOluMsCj,0q8eApZJs5WDBxayY9769C,2CMGIUxJXzUIEGt2jLpM5z`, {
      headers: {
        Authorization: "Bearer BQBVgq-jGf_3LtQdxpEZ6yrdG-coQ4eeO4GYCATyXoo_7Nbj7ivSecjr_AM_KdxLv2aBMvOstzwga3vUbtRyj3DcTVX5t9xRFozbTd5JOSAvjchPh0s"
      },
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

const postSpotifyData = async () => {
  try {
    const spotifyApiData = await fetchSpotifyData();

    for (const element of spotifyApiData) {
      databaseModels.Spotify.create({
        id: element.id,
        popularity: element.popularity,
        followers: element.followers,
        genres: element.genres,
        images: element.images,
        external_urls: element.external_urls,
        href: element.href,
        type: element.type,
        uri: element.uri
      })
    }
  } catch (err) {
    console.log(err);
    return err;
  }
}