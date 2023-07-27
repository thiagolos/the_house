"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const cors_1 = __importDefault(require("@koa/cors"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
// import router from './router.ts'
const app = new koa_1.default();
app.use((0, koa_bodyparser_1.default)());
app.use((0, cors_1.default)());
// app.use(router.routes());
// (async () => {
//   await database.sequelize.sync();
//   const port = 3000;
//   app.listen(port);
//   console.log('connected to the database');
//   console.log(`live on port ${port}`);
// })
