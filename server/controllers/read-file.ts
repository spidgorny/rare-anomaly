import { Connection } from 'sockjs';
import { LogByMinute } from '../model/log-by-minute';
import moment, { Moment } from 'moment';

const signale = require('signale');

let oncePerSecondTimestamp: Moment;

function oncePerSecond(): boolean {
	if (!oncePerSecondTimestamp) {
		oncePerSecondTimestamp = moment();
		return false;
	}

	const diff = moment().diff(oncePerSecondTimestamp);
	if (diff > 1000) {
		oncePerSecondTimestamp = moment();
		return true;
	}

	return false;
}

const LineByLineReader = require('line-by-line');

export function readFile(event: { file: string }, conn: Connection) {
	if (!event.file) {
		throw new Error('file param missing');
	}

	const routeName = '/readFile';
	let linesProcessed = 0;

	const log = new LogByMinute((isoTime: string, lines: string[]) => {
		conn.write(
			JSON.stringify({
				route: routeName,
				isoTime,
				numLines: lines.length
			})
		);
	});
	const lr = new LineByLineReader(process.env.LOGROOT + event.file);

	lr.on('error', function (err: Error) {
		return { error: err };
	});

	lr.on('line', function (line: string) {
		// signale.log(line);
		// conn.write(JSON.stringify({ route: routeName, line }));
		if (oncePerSecond()) {
			signale.log('linesProcessed', linesProcessed);
		}
	});

	lr.on('end', function () {
		return { end: true };
	});
}
