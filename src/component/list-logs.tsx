export default function ListLogs(props: {
	event: MessageEvent;
	ws: WebSocket;
}) {
	return (
		<>
			<div>{props.event.data}</div>
			<button
				type="button"
				onClick={() => props.ws.send(JSON.stringify({ route: '/list-logs' }))}
			>
				Send XXX
			</button>
		</>
	);
}
