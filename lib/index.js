/**
 * @module leekslazylogger-express
 * @author eartharoid <contact@eartharoid.me>
 * @description leekslazylogger express.js middleware
 * @copyright 2020 Isaac Saunders (eartharoid)
 * @license MIT
 */

const ChildLogger = require('leekslazylogger-express').ChildLogger;
const log = new ChildLogger();
const onFinished = require('on-finished');

const reqDuration = start => { // ngl I didn't write this
	const NS_PER_SEC = 1e9; // convert to nanoseconds
	const NS_TO_MS = 1e6; // convert to milliseconds
	const diff = process.hrtime(start);
	return (diff[0] * NS_PER_SEC + diff[1]) / NS_TO_MS;
};

module.exports = (req, res, next) => {
	next();
	const {method, originalUrl} = req;
	onFinished(res, (err, res) => {
		const { statusCode } = res;
		let status = statusCode >= 500 ? '&4' // server error, red
			: statusCode >= 400 ? '&6' // client error, yellow
				: statusCode >= 300 ? '&3' // redirects, cyan
					: statusCode >= 200 ? '&2' // success, green
						: '&f';
		status += statusCode;

		let ms = reqDuration(process.hrtime()).toLocaleString();
		let time = ms >= 10 ? '&c' // took too long, light red
			: ms >= 1 ? '&e' // over 1ms is a little slow, light yellow
				: '&a'; // speed™️, light green
		time += `(${ms} ms)`;
	
		log.console(log.f(`${method} &7${originalUrl} ${status} ${time}`));
	});
};