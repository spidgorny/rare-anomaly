import './app.css';
import { WebSocketComponent } from './service/web-socket';
import Template from './page/template';
import ListLogs from './component/list-logs';

export default function App() {
	return (
		<div className="App">
			<Template title="Ticket List">
				<WebSocketComponent
					render={(event: MessageEvent, ws: WebSocket) => (
						<ListLogs event={event} ws={ws} />
					)}
				/>
			</Template>
		</div>
	);
}
