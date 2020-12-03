import http from 'http';
import os from 'os';
import { Server } from 'sockjs';

const signale = require('signale');
const sockjs = require('sockjs');

let port = process.env.PORT || 3000;

export function setupSockServer(app: any): Server {
	const ws = sockjs.createServer({
		prefix: '/sock'
	});

	const server = http.createServer(app.callback());
	ws.installHandlers(server);
	server.listen(port);

	const host = os.hostname;
	signale.success('Listening to ' + host + ':' + port);
	return ws;
}
