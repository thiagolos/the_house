import Koa from 'koa';
import cors from '@koa/cors';
import bodyParser from 'koa-bodyparser';

// import database from './models/index.ts'
// import router from './router.ts'

const app = new Koa();

app.use(bodyParser());
app.use(cors());
// app.use(router.routes());

// (async () => {
//   await database.sequelize.sync();
//   const port = 3000;
//   app.listen(port);
//   console.log('connected to the database');
//   console.log(`live on port ${port}`);
// })
