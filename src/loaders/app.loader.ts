import Koa from 'koa';
import config from '../common/config';

export default ():Promise<void> => new Promise((resolve, reject) => {
  try {
    const app = new Koa();
    const { PORT } = config;

    app.use((ctx) => {
      ctx.body = 'Hello World';
    });
    app.listen(PORT, () => {
      console.log(`launched in ${app.env} mode`);
      resolve();
    });
  } catch (e) {
    reject(e);
  }
});
