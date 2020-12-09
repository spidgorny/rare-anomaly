import { Connection } from 'sockjs';
import { LogByMinute, parseTimestampFrom } from '../model/log-by-minute';
import { startReadingFile } from '../service/start-loading-file';
import moment from 'moment';
const signale: Signale = require('signale');

export interface Signale {
	error: (line: any, extra?: any) => void;
	fatal: (line: any, extra?: any) => void;
	fav: (line: any, extra?: any) => void;
	info: (line: any, extra?: any) => void;
	star: (line: any, extra?: any) => void;
	success: (line: any, extra?: any) => void;
	wait: (line: any, extra?: any) => void;
	warn: (line: any, extra?: any) => void;
	complete: (line: any, extra?: any) => void;
	pending: (line: any, extra?: any) => void;
	note: (line: any, extra?: any) => void;
	start: (line: any, extra?: any) => void;
	pause: (line: any, extra?: any) => void;
	debug: (line: any, extra?: any) => void;
	await: (line: any, extra?: any) => void;
	watch: (line: any, extra?: any) => void;
	log: (line: any, extra?: any) => void;
}

export function fetchLogs(
	event: { file: string; minute: string },
	conn: Connection
) {
	signale.await(event);
	if (!event.file) {
		throw new Error('file param missing');
	}
	const startTime = moment(event.minute);

	const routeName = '/fetchLogs';

	const push = (data: any) => {
		conn.write(JSON.stringify({ route: routeName, ...data }));
	};

	// reading file and extracting lines starting
	// from timestamp provided
	const goodLines: string[] = [];
	let isGood = false;

	// signale.log('startReadingFile', process.env.LOGROOT + event.file);
	startReadingFile(
		process.env.LOGROOT + event.file,
		(line: string) => {
			const timestamp = parseTimestampFrom(line);
			if (timestamp.isValid() && timestamp.isSame(startTime) && !isGood) {
				isGood = true;
			} else if (
				timestamp.isValid() &&
				!timestamp.isSame(startTime) &&
				isGood
			) {
				// EOF
				isGood = false;

				push({ goodLines });
			}

			if (isGood) {
				goodLines.push(line);
			}
		},
		push
	);

	return { started: 'now' };
}
