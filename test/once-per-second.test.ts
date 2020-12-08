import { oncePerSecond, sleep } from '../server/functions';

const range = require('fill-range');

describe('oncePerSecond', () => {
	it('outputs three times', async () => {
		let seconds = 0;
		for await (const i of range(0, 6)) {
			// console.log(i, seconds);
			if (oncePerSecond()) {
				seconds++;
				// console.log('oncePerSecond', seconds);
			}
			await sleep(500);
		}
		expect(seconds).toBe(3);
	});
});
