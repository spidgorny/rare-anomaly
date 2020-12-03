import { Context } from 'koa';

const Router = require('koa-router');

export const router = new Router();
router.get('/404', (ctx: Context) => ctx.throw(404));
router.get('/500', (ctx: Context) => ctx.throw(500));

// const decRouter = DecRouter({
//   controllersDir: `${__dirname}/controllers`,
//   before: null, // global middleware
//   after: null, // global middleware
//   autoLoadControllers: true,
// });
// app.use(decRouter.router.routes());
// app.use(decRouter.router.allowedMethods());

router.get('/hello', (ctx: Context) => {
	ctx.body = 'Hello Koa';
});

// app.use(nativeWS);
