import { useCallback, useEffect, useState } from 'react';
import { useWebSocket } from '../service/use-web-socket';
// @ts-ignore
import debounceRender from 'react-debounce-render';
import * as React from 'react';
import { MyDebounce } from './debounce2';

function FilePage(props: any) {
	const [data, send, wsState] = useWebSocket('/readFile');
	const [logsPerMinute, setLPM] = useState({});
	const [loading, setLoading] = useState(false);

	const restart = useCallback(() => {
		setLPM({});
		send({
			file: props.params.filename
		});
		setLoading(true);
	}, [props.params.filename, send]);

	useEffect(() => {
		console.log('mounted, restarting');
		restart();
	}, [wsState, restart]);

	useEffect(
		() => {
			// console.log('new data');
			// console.log(data);
			if (data && 'isoTime' in data) {
				setLPM({ ...logsPerMinute, [data.isoTime]: data.numLines });
			}
			if (data && 'end' in data) {
				setLoading(false);
			}
		},
		// @ignore react-hooks/exhaustive-deps
		[
			// not logsPerMinute as this become infinite loop
			data
		]
	);

	// not working
	// const Render = React.memo(RenderFilePage, (prev, next) => true);

	// not working
	// const Render2 = debounceRender(Render, 1000, { maxWait: 1000 });

	return (
		<MyDebounce howOften={1000}>
			<RenderFilePage
				restart={restart}
				loading={loading}
				logsPerMinute={logsPerMinute}
			/>
		</MyDebounce>
	);
}

function RenderFilePage({ restart, loading, logsPerMinute }: any) {
	console.log('render');
	return (
		<div>
			<button
				onClick={restart}
				disabled={loading}
				className={[loading ? 'disabled' : ''].join(' ')}
			>
				Restart
			</button>
			<hr />
			<p>Keys: {Object.keys(logsPerMinute).length}</p>
			{/*<pre>{JSON.stringify(logsPerMinute, null, 2)}</pre>*/}
		</div>
	);
}

export default debounceRender(FilePage, 1000, { maxWait: 1000 });
