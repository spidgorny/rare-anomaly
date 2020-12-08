import moment, { Moment } from 'moment';

export class LogByMinute {
	data: Record<string, string[]> = {};

	currentTimestamp?: Moment = undefined;

	constructor(
		protected onNewMinute: (isoTime: string, lines: string[]) => void
	) {
		moment.suppressDeprecationWarnings = true;
	}

	addLine(line: string) {
		let timestamp = moment(line);
		if (!timestamp.isValid()) {
			timestamp = moment(line.split('GMT')[0] + 'GMT');
		}
		if (timestamp.isValid()) {
			timestamp.seconds(0);
			timestamp.millisecond(0);

			// before switching to a new minute,
			// we need to notify that we are switching
			if (this.currentTimestamp) {
				if (!this.currentTimestamp.isSame(timestamp)) {
					this.onNewMinute(
						this.currentTimestamp.toISOString(),
						this.data[this.currentTimestamp.toISOString()]
					);
				}
			}

			this.currentTimestamp = timestamp;
		}

		if (!this.currentTimestamp) {
			// this skips rows in the beginning
			// which don't have a timestamp
			return;
		}
		const key = this.currentTimestamp.toISOString();

		this.data[key] = key in this.data ? this.data[key] : [];
		this.data[key].push(line);
	}
}
