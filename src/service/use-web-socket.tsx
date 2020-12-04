import * as React from 'react';
import { useCallback, useState } from 'react';
const deepEqual = require('deep-equal');

interface IWebSocketContext {
	event?: MessageEvent;
	ws: WebSocket;
}

export const WebSocketContext = React.createContext({} as IWebSocketContext);

export function useWebSocket(
	route: string,
	initial?: any
): [any, (data?: object) => void] {
	const context = React.useContext(WebSocketContext);
	const [state, setState] = useState(initial);

	const send = useCallback(
		(data: object = {}) => {
			if (context.ws.readyState !== WebSocket.OPEN) {
				console.warn('send not possible', context.ws.readyState);
				return;
			}
			console.log('send', route);
			context.ws.send(JSON.stringify({ route, ...data }));
		},
		[route, context]
	);

	if (context.event?.data) {
		try {
			const data = JSON.parse(context.event.data);
			console.log('useWebSocket', data.route);
			if (data.route === route) {
				if (!deepEqual(state, data.reply)) {
					setState(data.reply);
				}
			}
		} catch (e) {
			console.error(e);
			console.warn(context.event.data);
		}
	}

	return [state, send];
}
