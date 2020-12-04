import * as os from 'os';

export function getConfig() {
	return {
		cwd: process.cwd(),
		execPath: process.execPath,
		version: process.version,
		uptime: process.uptime(),
		title: process.title,
		pid: process.pid,
		platform: process.platform,
		hostname: os.hostname(),
		arch: os.arch(),
		endianness: os.endianness(),
		freemem: os.freemem(),
		totalmem: os.totalmem(),
		homedir: os.homedir(),
		loadavg: os.loadavg(),
		release: os.release(),
		type: os.type(),
		userInfo: os.userInfo()
	};
}
