import appLoader from './app.loader';
import databaseLoader from './database.loader';

export default async ():Promise<void> => {
  await databaseLoader();
  await appLoader();
};
