import { Connection } from 'sockjs';
import { LogByMinute } from '../model/log-by-minute';
import { oncePerSecond } from '../functions';

const signale = require('signale');

const LineByLineReader = require('line-by-line');

export function startReadingFile(
	filename: string,
	onLine: (line: string) => void,
	push: (data: any) => void
) {
	let linesProcessed = 0;
	const lr = new LineByLineReader(filename);

	lr.on('error', function (err: Error) {
		signale.error(err);
		push({ error: err });
	});

	lr.on('line', function (line: string) {
		// signale.log(line);
		onLine(line);
		++linesProcessed;
		if (oncePerSecond()) {
			signale.log('linesProcessed', linesProcessed);
		}
	});

	lr.on('end', function () {
		//signale.log('end linesProcessed', linesProcessed);
		push({ end: true });
	});

	return lr;
}

export function readFile(event: { file: string }, conn: Connection) {
	if (!event.file) {
		throw new Error('file param missing');
	}

	const routeName = '/readFile';

	const push = (data: any) => {
		conn.write(JSON.stringify({ route: routeName, ...data }));
	};

	const log = new LogByMinute((isoTime: string, lines: string[]) => {
		conn.write(
			JSON.stringify({
				route: routeName,
				isoTime,
				numLines: lines.length
			})
		);
	});

	startReadingFile(
		process.env.LOGROOT + event.file,
		(line: string) => {
			log.addLine(line);
		},
		push
	);

	return { started: 'now' };
}
