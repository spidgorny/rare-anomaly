import { useEffect } from 'react';
import { useWebSocket } from '../service/use-web-socket';

export default function FilePage(props: any) {
	const [data, send, wsState] = useWebSocket('/readFile');

	const restart = () => {
		send({
			file: props.params.filename
		});
	};

	useEffect(() => {
		console.log('mounted');
		restart();
	}, [wsState]);

	return (
		<div>
			<button onClick={restart}>Restart</button>
			<hr />
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</div>
	);
}
