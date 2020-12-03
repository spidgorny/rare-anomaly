import { myBodyParser, myHelmet } from './koa-bootstrap';
import { router } from './koa-routes';
import { setupSockServer } from './koa-sock';
import { Connection } from 'sockjs';
import { routeEvent } from './ws-routes';

const Koa = require('koa');
const logger = require('koa-logger');
const kStatic = require('koa-static');
const errorHandler = require('koa-better-error-handler');
const koa404Handler = require('koa-404-handler');
const respond = require('koa-respond');
const json = require('koa-json');
const health = require('koa-ping');
const websocket = require('koa-easy-ws');

const app = new Koa();
app.context.onerror = errorHandler();
app.use(myHelmet);
app.use(logger());
app.use(myBodyParser);
app.use(respond());
app.use(json());
app.use(kStatic('build', {}));
app.use(kStatic('adminmart', {}));
// app.use(health('/ping'));
// app.use(myMarkdown);
app.use(websocket());
app.use(koa404Handler);
app.use(router.routes()).use(router.allowedMethods());

// app.listen(port);
const ws = setupSockServer(app);
ws.on('connection', (conn: Connection) => {
	conn.on('data', async (message: string) => {
		const reply = await routeEvent(message);
		console.log(reply);
		conn.write(JSON.stringify(reply));
	});

	function keepSendingTime() {
		setInterval(() => {
			// signale.log('emit to', conn.address, conn.protocol);
			conn.write(new Date().toUTCString());
		}, 1000);
	}
	// keepSendingTime();
});
