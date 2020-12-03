// @ts-expect-error
import logo from './logo.svg';
import './app.css';
import { WebSocketComponent } from './service/web-socket';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<WebSocketComponent
					render={(event: MessageEvent, ws: WebSocket) => (
						<>
							<div>{event.data}</div>
							<button
								type="button"
								onClick={() => ws.send('XXX ' + Math.random())}
							>
								Send XXX
							</button>
						</>
					)}
				/>
			</header>
		</div>
	);
}

export default App;
