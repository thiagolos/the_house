import Router from 'koa-router';
const router = new Router();

// import { postSpotifyData } from './controllers/backend.controllers';
import { postTracksData } from './controllers/backend.controllers';
// import { postArtistData } from './controllers/backend.controllers';

// router.get('/test', postSpotifyData);
router.get('/test', postTracksData);
// router.get('/test', postArtistData);

export default router;