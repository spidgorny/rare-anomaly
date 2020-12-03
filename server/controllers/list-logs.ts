import { Context } from 'koa';
import * as fs from 'fs';

export function listLogs(ctx: Context) {
	const files = fs.readdirSync('logs/');
	return files;
}
