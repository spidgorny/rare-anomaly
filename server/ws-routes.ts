import { listLogs } from './controllers/list-logs';
import { getConfig } from './controllers/get-config';

const signale = require('signale');

const wsRoutes: Record<string, (msg: any) => void> = {
	'/list-logs': listLogs,
	'/config': getConfig
};

export async function routeEvent(message: string) {
	signale.log('routeEvent', message);
	try {
		const event = JSON.parse(message);

		const route = event.route;
		const handler = wsRoutes[route];
		if (handler) {
			const reply = await handler(event);
			return { route, reply };
		} else if (route) {
			console.warn('no handler for ', event.route);
		}
	} catch (e) {
		signale.error(e);
	}
}
