"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const associations_1 = require("./associations");
const db_1 = __importDefault(require("../db"));
const models = (0, associations_1.initModels)(db_1.default);
exports.default = models;
