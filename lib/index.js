/**
 * @module leekslazylogger-express
 * @author eartharoid <contact@eartharoid.me>
 * @description leekslazylogger express.js middleware
 * @copyright 2020 Isaac Saunders (eartharoid)
 * @license MIT
 */

const Logger = require('leekslazylogger');
const onFinished = require('on-finished');

const reqDuration = start => {
	const NS_PER_SEC = 1e9; // convert to nanoseconds
	const NS_TO_MS = 1e6; // convert to milliseconds
	const diff = process.hrtime(start);
	return (diff[0] * NS_PER_SEC + diff[1]) / NS_TO_MS;
};

module.exports = class ExpressLogger extends Logger {
	constructor(options) {
		super(options);

		if (!this.options.express) this.options.express = {};
		if (!this.options.express.format) this.options.express.format = '{method} &7{path} {status-colour}{status} {time-colour}({time})';
		
		this.express = (req, res, next) => {
			next(); // let the request continue

			const { method, protocol, baseUrl, path } = req;

			onFinished(res, (err, res) => {
				const { statusCode } = res;
				let statusColour = statusCode >= 500 ? '&4' // server error, red
					: statusCode >= 400 ? '&6' // client error, yellow
						: statusCode >= 300 ? '&3' // redirects, cyan
							: statusCode >= 200 ? '&2' // success, green
								: '&f';

				let ms = reqDuration(process.hrtime()).toLocaleString();
				let timeColour = ms >= 10 ? '&c' // took too long, light red
					: ms >= 1 ? '&e' // over 1ms is a little slow, light yellow
						: '&a'; // speed™️, light green
				let time = `${ms} ms`;

				let text = this.options.express.format
					.replace(/{method}/gmi, method)
					.replace(/{protocol}/gmi, protocol.toUpperCase())
					.replace(/{path}/gmi, baseUrl + path)
					.replace(/{status-colou?r}/gmi, statusColour)
					.replace(/{status}/gmi, statusCode)
					.replace(/{time-colou?r}/gmi, timeColour)
					.replace(/{time}/gmi, time);

				this.console(Logger.format(text));
			});
		};
	}
};
