import { Sequelize } from 'sequelize';
import config from '../common/config';

export default async ():Promise<void> => {
  const { DATABASE_CONNECTION_STRING } = config;
  const sequelize = new Sequelize(DATABASE_CONNECTION_STRING);
  await sequelize.authenticate();
  console.log('database connected');
};
