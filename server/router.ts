import Router from 'koa-router';
const router = new Router();
import { postSpotifyData } from './test';

router.get('/test', postSpotifyData);

export default router;