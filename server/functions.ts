import moment, { Moment } from 'moment';

let oncePerSecondTimestamp: Moment;

export function oncePerSecond(): boolean {
	if (!oncePerSecondTimestamp) {
		oncePerSecondTimestamp = moment();
		return false;
	}

	const diff = moment().diff(oncePerSecondTimestamp);
	// console.log('oncePerSecond', diff);
	if (diff > 1000) {
		oncePerSecondTimestamp = moment();
		return true;
	}

	return false;
}

export async function sleep(ms: number) {
	return new Promise((resolve, reject) => {
		setTimeout(resolve, ms);
	});
}
