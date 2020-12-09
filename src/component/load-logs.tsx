import { Bars } from '@agney/react-loading';
import { useWebSocket } from '../service/use-web-socket';
import { useEffect, useState } from 'react';

export default function LoadLogs({
	filename,
	minute
}: {
	filename: string;
	minute: string;
}) {
	const [data, send, wsState] = useWebSocket('/fetchLogs');
	const [loading, setLoading] = useState(false);
	const [goodLines, setGoodLines] = useState([]);

	// onMount
	useEffect(() => {
		// console.log(filename, minute);
		setLoading(true);
		send({
			file: filename,
			minute
		});
		// reset
		setGoodLines([]);
	}, [filename, minute]);

	// onNewWS
	useEffect(() => {
		if (!data) {
			return;
		}
		// console.log(data);
		if (data.goodLines) {
			//console.log(data.goodLines);
			setGoodLines(data.goodLines);
		}
		if (data?.end) {
			setLoading(false);
		}
	}, [data]);

	return (
		<table>
			<thead>
				<tr>
					<th>Logs</th>
				</tr>
			</thead>
			<tbody>
				{!loading ? (
					goodLines.map((row: string, idx: number) => (
						<tr key={idx}>
							<td>
								<pre style={{ whiteSpace: 'pre-wrap' }}>{row}</pre>
							</td>
						</tr>
					))
				) : (
					<tr>
						<td>
							<Bars width="25" />
						</td>
					</tr>
				)}
			</tbody>
		</table>
	);
}
