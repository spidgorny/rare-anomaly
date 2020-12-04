import * as React from 'react';
import { useCallback, useState } from 'react';
import { State } from 'sockjs-client';
const deepEqual = require('deep-equal');

interface IWebSocketContext {
	event?: MessageEvent;
	ws: WebSocket;
}

export const WebSocketContext = React.createContext({} as IWebSocketContext);

export function useWebSocket(
	route: string,
	initial?: any
): [any, (data?: object) => void, State] {
	const context = React.useContext(WebSocketContext);
	const [state, setState] = useState(initial);
	const [wsState, setWS] = useState(context.ws.readyState as State);

	const send = useCallback(
		(data: object = {}) => {
			if (context.ws.readyState !== WebSocket.OPEN) {
				console.warn('send not possible', context.ws.readyState);
				return;
			}
			console.log('send', route);
			context.ws.send(JSON.stringify({ route, ...data }));
		},
		[route] // not depending on context.ws because it triggers a loop
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

	if (context.ws.readyState === WebSocket.OPEN && wsState !== WebSocket.OPEN) {
		// we update local state to forceRender() child components
		setWS(context.ws.readyState as State);
	}

	return [state, send, wsState];
}
