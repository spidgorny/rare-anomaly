import { startReadingFile } from '../server/controllers/read-file';
import { LogByMinute } from '../server/model/log-by-minute';

describe('read log file line by line', () => {
	it('reads file 1', () => {
		return new Promise((resolve, reject) => {
			// console.log('startReadingFile');
			let lines = 0;
			startReadingFile(
				'logs/http-error-1__2020-11-25_00-00-00.log',
				(line: string) => {
					++lines;
				},
				(obj: any) => {
					// console.log(obj);
					if (obj.end) {
						expect(lines).toBe(193);
						resolve(true);
					}
				}
			);
		});
	});

	it('reads file and collects', () => {
		return runCollectorFor('logs/http-error-1__2020-11-25_00-00-00.log', 25);
	});

	it('reads longer file and collects', () => {
		return runCollectorFor('logs/http-out-1__2020-11-24_00-00-00.log', 1465);
	}, 30000);
});

function runCollectorFor(filename: string, mustHave: number) {
	return new Promise((resolve, reject) => {
		const log = new LogByMinute((isoTime: string, lines: string[]) => {
			// noop
			//console.log('emit', isoTime, lines.length);
		});

		startReadingFile(
			filename,
			(line: string) => {
				log.addLine(line);
			},
			(obj: any) => {
				// console.log(obj);
				if (obj.end) {
					// console.log(Object.keys(log.data));
					expect(Object.keys(log.data).length).toBe(mustHave);
					resolve(true);
				}
			}
		);
	});
}
