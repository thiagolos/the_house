import Koa from 'koa';
import cors from '@koa/cors';
import bodyParser from 'koa-bodyparser';

import sequelize from './db'
import router from './router'

const app = new Koa();

app.use(bodyParser());
app.use(cors());
app.use(router.routes());

(async () => {
  await sequelize.sync({force: true});
  const port = 3000;
  app.listen(port);
  console.log('connected to the database');
  console.log(`live on port ${port}`);
})();
