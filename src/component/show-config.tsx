import * as React from 'react';
import { useCallback, useEffect } from 'react';
import { useWebSocket } from '../service/use-web-socket';

export default function ShowConfig(props: {}) {
	const [data, send] = useWebSocket('/config');

	const fetchLogFiles = useCallback(() => {
		send();
	}, [send]);

	useEffect(() => {
		fetchLogFiles();
	}, []);

	return (
		<>
			<pre>{JSON.stringify(data, null, 2)}</pre>
			<button type="button" onClick={() => fetchLogFiles()}>
				Send /config
			</button>
		</>
	);
}
