import { useLoading, Bars } from '@agney/react-loading';

export default function LoadLogs({
	filename,
	minute
}: {
	filename: string;
	minute: string;
}) {
	return (
		<table>
			<tr>
				<th>Logs</th>
			</tr>
			<tbody>
				<tr>
					<td>
						<Bars width="25" />
					</td>
				</tr>
			</tbody>
		</table>
	);
}
