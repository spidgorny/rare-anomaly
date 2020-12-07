import * as React from 'react';
import { useCallback, useEffect } from 'react';
import { Link } from 'wouter';
import { useWebSocket } from '../service/use-web-socket';

export default function ListLogs(props: {}) {
	const [data, send, wsState] = useWebSocket('/list-logs', []);

	const fetchLogFiles = useCallback(() => {
		send();
	}, [send]);

	useEffect(() => {
		fetchLogFiles();
	}, [fetchLogFiles, wsState]); // wsState to rerender after ws.readyState changes

	return (
		<>
			<li className="nav-small-cap d-flex justify-content-between">
				<span className="hide-menu">Log files</span>
				<button type="button" className="btn" onClick={() => fetchLogFiles()}>
					<i className="fas fa-sync"></i>
				</button>
			</li>
			{data.map((el: string, index: number) => (
				<li key={index} className="sidebar-item">
					<Link href={`/logFile/${el}`} className="sidebar-link sidebar-link">
						{el}
					</Link>
				</li>
			))}
		</>
	);
}
