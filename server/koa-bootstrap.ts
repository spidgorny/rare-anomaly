import { Context, Next } from 'koa';
import path from 'path';

const helmet = require('koa-helmet');
const BodyParser = require('koa-bodyparser');
const markdown = require('koa-markdown');
const signale = require('signale');

export let myHelmet = helmet({
	contentSecurityPolicy: false
	// contentSecurityPolicy: {
	//   directives: {
	//     ...helmet.contentSecurityPolicy.getDefaultDirectives,
	//     "script-src": ["'self'", "'unsafe-inline'"],
	//   }
	// },
});
export let myBodyParser = BodyParser({
	enableTypes: ['json', 'form', 'text'],
	jsonLimit: '5mb',
	strict: true,
	multipart: true,
	returnRawBody: true,
	onerror(err: any, ctx: Context) {
		ctx.throw('body parse error', 422);
	}
});
export let myMarkdown = markdown({
	root: path.resolve(__dirname, '..'),
	baseUrl: '/docs'
});

export let nativeWS = async (ctx: Context, next: Next) => {
	// check if the current request is websocket
	if (ctx.ws) {
		const ws: WebSocket = await ctx.ws(); // retrieve socket

		ws.onmessage = (msg: MessageEvent) => {
			signale.log(msg.toString());
		};

		// now you have a ws instance, you can use it as you see fit
		return ws.send('hello there');
	}

	// we're back to regular old http here
	next();
};
