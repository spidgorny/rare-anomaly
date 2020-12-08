import * as React from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { State } from 'sockjs-client';
const deepEqual = require('deep-equal');

function usePrevious(value: any) {
	const ref = useRef();
	useEffect(() => {
		ref.current = value;
	});
	return ref.current;
}

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
		(params: object = {}) => {
			if (context.ws.readyState !== WebSocket.OPEN) {
				console.warn('send not possible', context.ws.readyState);
				return;
			}
			console.log('send ==>', route);
			context.ws.send(JSON.stringify({ route, ...params }));
		},
		[route, context.ws] // not depending on context.ws because it triggers a loop
	);

	const prev = usePrevious(context.event);

	useEffect(() => {
		if (deepEqual(prev, context.event)) {
			return;
		}
		if (context.event?.data) {
			try {
				const data = JSON.parse(context.event.data);
				// console.log('useWebSocket data <==', data.route);
				// console.log(data);
				if (data.route === route) {
					// this prevents infinite rerender
					if (!deepEqual(state, data)) {
						// console.log('new ws data', data);
						setState(data);
					}
				}
			} catch (e) {
				console.error(e);
				console.warn(context.event.data);
			}
		}
	}, [context.event]);

	if (context.ws.readyState !== wsState) {
		// we update local state to forceRender() child components
		setWS(context.ws.readyState as State);
	}

	return [state, send, wsState];
}
