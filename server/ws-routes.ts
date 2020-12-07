import { listLogs } from './controllers/list-logs';
import { getConfig } from './controllers/get-config';
import { readFile } from './controllers/read-file';
import { Connection } from 'sockjs';

const signale = require('signale');

const wsRoutes: Record<string, (msg: any, conn: Connection) => void> = {
	'/list-logs': listLogs,
	'/config': getConfig,
	'/readFile': readFile
};

export async function routeEvent(message: string, conn: Connection) {
	signale.log('routeEvent', message);
	try {
		const event = JSON.parse(message);

		const route = event.route;
		const handler = wsRoutes[route];
		if (handler) {
			const reply = await handler(event, conn);
			return { route, reply };
		} else if (route) {
			console.warn('no handler for ', event.route);
		}
	} catch (e) {
		signale.error(e);
	}
}
