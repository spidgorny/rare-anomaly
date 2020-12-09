import moment, { Moment } from 'moment';
const signale = require('signale');

export function parseTimestampFrom(line: string) {
	let timestamp = moment(line);
	if (!timestamp.isValid()) {
		timestamp = moment(line.split('GMT')[0] + 'GMT');
	}
	if (timestamp.isValid()) {
		timestamp.seconds(0);
		timestamp.millisecond(0);
	}
	return timestamp;
}

export class LogByMinute {
	data: Record<string, string[]> = {};

	currentMinute?: Moment = undefined;

	constructor(
		protected onNewMinute: (isoTime: string, lines: string[]) => void
	) {
		moment.suppressDeprecationWarnings = true;
	}

	addLine(line: string) {
		const timestamp = parseTimestampFrom(line);
		if (timestamp.isValid()) {
			// before switching to a new minute,
			// we need to notify that we are switching
			if (this.currentMinute) {
				if (!this.currentMinute.isSame(timestamp)) {
					this.onNewMinute(
						this.currentMinute.toISOString(),
						this.data[this.currentMinute.toISOString()]
					);
				}
			}

			this.currentMinute = timestamp;
		}
		// signale.log(this.currentMinute, line);

		if (!this.currentMinute) {
			// this skips rows in the beginning
			// which don't have a timestamp
			return;
		}
		const key = this.currentMinute.toISOString();

		this.data[key] = key in this.data ? this.data[key] : [];
		this.data[key].push(line);
	}
}
