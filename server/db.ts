import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const env = process.env;

const sequelize = new Sequelize(
  `${env.DB_NAME}`,
  `${env.DB_USERNAME}`,
  `${env.DB_PASSWORD}`,
  {
    dialect: "postgres",

    logging: false,
  }
);

export default sequelize;
