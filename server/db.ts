import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('the_house', 'thiagolos', 'Test123!', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false
});

export default sequelize;