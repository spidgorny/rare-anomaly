import './app.css';
import { WebSocketComponent } from './service/web-socket';
import Template from './page/template';
import * as React from 'react';
import ShowConfig from './component/show-config';
import { WebSocketContext } from './service/use-web-socket';

export default function App() {
	return (
		<div className="App">
			<WebSocketComponent
				render={(event: MessageEvent | undefined, ws: WebSocket) => (
					<WebSocketContext.Provider value={{ event, ws }}>
						<Template title="Ticket List">
							<ShowConfig />
						</Template>
					</WebSocketContext.Provider>
				)}
			/>
		</div>
	);
}
