import { Connection } from 'sockjs';
import moment from 'moment';
const signale = require('signale');

export function fakeFile(event: { file: string }, conn: Connection) {
	const fakeData = [
		{
			isoTime: moment().add(1, 'second').toISOString(),
			numLines: 1
		},
		{
			isoTime: moment().add(2, 'second').toISOString(),
			numLines: 2
		},
		{
			isoTime: moment().add(3, 'second').toISOString(),
			numLines: 3
		}
	];

	for (let i = 0; i < fakeData.length; i++) {
		setTimeout(() => {
			signale.log(fakeData[i]);
			conn.write(
				JSON.stringify({
					route: '/fakeFile',
					...fakeData[i]
				})
			);
		}, 1000 * (i + 1));
	}

	return { status: 'ok' };
}
