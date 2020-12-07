import './app.css';
import { WebSocketComponent } from './service/web-socket';
import Template from './page/template';
import * as React from 'react';
import { WebSocketContext } from './service/use-web-socket';
import Router from './router';

export default function App() {
	return (
		<div className="App">
			<WebSocketComponent
				render={(event: MessageEvent | undefined, ws: WebSocket) => (
					<WebSocketContext.Provider value={{ event, ws }}>
						<Template title="Ticket List">
							<Router />
						</Template>
					</WebSocketContext.Provider>
				)}
			/>
		</div>
	);
}
