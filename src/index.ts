import Koa from 'koa';
import config from './common/config';

const app = new Koa();
const { PORT } = config;

app.use((ctx) => {
  ctx.body = 'Hello World';
});

app.listen(PORT, () => console.log(`The app is launched in ${app.env} mode on port ${PORT}`));
