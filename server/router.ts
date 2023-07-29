import Router from 'koa-router';
const router = new Router();

import artistController from './controllers/artist.data.controller'

// import { postSpotifyData } from './controllers/backend.controllers';
// import { postTracksData } from './controllers/backend.controllers';
// import { postArtistData } from './controllers/backend.controllers';

// router.get('/test', postSpotifyData);
// router.get('/test', postTracksData);
// router.get('/test', postArtistData);

router.get('/artistsAndSpotify', artistController.getArtistsAndSpotify);
router.get('/topTracks/:id', artistController.getArtistTracks);
router.get('/spotifyAndTracks/:id', artistController.getSpotifyAndTracks);


export default router;