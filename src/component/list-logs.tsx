import * as React from 'react';
import { useCallback, useEffect } from 'react';
import { useWebSocket } from '../service/use-web-socket';

export default function ListLogs(props: {}) {
	const [data, send] = useWebSocket('/list-logs', []);

	const fetchLogFiles = useCallback(() => {
		send();
	}, [send]);

	useEffect(() => {
		fetchLogFiles();
	}, []);

	return (
		<>
			<div>
				{data.map((el: string, index: number) => (
					<div key={index}>{el}</div>
				))}
			</div>
			<button type="button" onClick={() => fetchLogFiles()}>
				Send XXX
			</button>
		</>
	);
}