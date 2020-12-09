import { Connection } from 'sockjs';
import { LogByMinute } from '../model/log-by-minute';
import { startReadingFile } from '../service/start-loading-file';

export function readFile(event: { file: string }, conn: Connection) {
	if (!event.file) {
		throw new Error('file param missing');
	}

	const routeName = '/readFile';

	const push = (data: any) => {
		conn.write(JSON.stringify({ route: routeName, ...data }));
	};

	const log = new LogByMinute((isoTime: string, lines: string[]) => {
		push({
			isoTime,
			numLines: lines.length
		});
	});

	let linesRead = 0;
	startReadingFile(
		process.env.LOGROOT + event.file,
		(line: string) => {
			// limit very large file for development
			if (++linesRead > 10000) {
				return;
			}
			log.addLine(line);
		},
		push
	);

	return { started: 'now' };
}
