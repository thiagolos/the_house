"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('the_house', 'thiagolos', 'Test123!', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false
});
exports.default = sequelize;
