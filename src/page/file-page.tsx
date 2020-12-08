import { useCallback, useEffect, useState } from 'react';
import { useWebSocket } from '../service/use-web-socket';

export default function FilePage(props: any) {
	const [data, send, wsState] = useWebSocket('/fakeFile');

	const [logsPerMinute, setLPM] = useState({});

	const restart = useCallback(() => {
		setLPM({});
		send({
			file: props.params.filename
		});
	}, [props.params.filename, send]);

	useEffect(() => {
		console.log('mounted, restarting');
		restart();
	}, [wsState, restart]);

	useEffect(() => {
		// console.log('new data');
		console.log(data);
		if (data && 'isoTime' in data) {
			setLPM({ ...logsPerMinute, [data.isoTime]: data.lines });
		}
	}, [data]);

	return (
		<div>
			<button onClick={restart}>Restart</button>
			<hr />
			<pre>{JSON.stringify(logsPerMinute, null, 2)}</pre>
		</div>
	);
}
