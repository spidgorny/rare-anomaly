import SockJS from 'sockjs-client';
import * as React from 'react';
import { ReactNode } from 'react';

const WEB_SOCKET_ENDPOINT =
	'http://' + document.location.hostname + ':3000/sock';

interface Props {
	name?: string;
	maxReconnect: number;
	render: (data: MessageEvent | undefined, ws: WebSocket) => ReactNode;
}

interface State {
	ws?: WebSocket;
	readyState: number;
	timeStamp: number;
	maxReconnect: number;
	message?: MessageEvent;
}

export class WebSocketComponent extends React.Component<Props, State> {
	static defaultProps: Props;
	state: State = {
		timeStamp: Date.now(),
		maxReconnect: 1
	};

	componentDidMount() {
		this.connect();
	}

	setupWebSocket = (webSoc: WebSocket) => {
		webSoc.onopen = (event: Event) => {
			console.log('connected!', event);
			this.setState((ws) => ({
				readyState: ws.readyState
			}));
			webSoc.send(
				JSON.stringify({
					userAgent: navigator.userAgent
				})
			);
		};
		webSoc.onmessage = (body: MessageEvent) => {
			console.log('onmessage', body);
			this.setState({
				message: body,
				timeStamp: Date.now()
			});
		};
		webSoc.onerror = (err: any) => {
			console.error(err);
			console.log('maxReconnect', this.state.maxReconnect);
			if (this.state.maxReconnect > 0) {
				this.setState(({ maxReconnect }) => {
					return { maxReconnect: maxReconnect - 1 };
				}, this.connect);
			}
		};
		webSoc.onclose = () => {
			console.warn('ws bye-bye');
			setTimeout(this.connect, 1000);
		};
	};

	connect = () => {
		console.log('connecting...');
		const ws = SockJS(WEB_SOCKET_ENDPOINT);
		this.setupWebSocket(ws);
		this.setState({ ws });
	};

	render() {
		if (this.state.ws && this.props.render) {
			return this.props.render(this.state.message, this.state.ws);
		}
		return <></>;
	}
}

WebSocketComponent.defaultProps = {
	name: 'something',
	maxReconnect: 5,
	render: (props, ws) => <></>
};
