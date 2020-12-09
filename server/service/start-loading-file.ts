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
