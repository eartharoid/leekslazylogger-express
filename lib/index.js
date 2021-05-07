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
	const NS_PER_SEC = 1e9;
	const NS_TO_MS = 1e6;
	const diff = process.hrtime(start);
	return (diff[0] * NS_PER_SEC + diff[1]) / NS_TO_MS;
};

/**
 * @extends {Logger}
 */
module.exports = class ExpressLogger extends Logger {
	constructor(o = {}) {
		super(o);
		this.register('express');
		this.options.express = [];
	}

	/**
	 * Create a new express middleware
	 * @param {*} [o] - middleware options
	 */
	express(o = {}) {
		let id = this.options.express.length;
		this.options.express[id] = {};
		this.options.express[id].level = o.level || 'info';
		this.options.express[id].format = o.format || '{status-colour}{status} &r{method} &7{path} {time-colour}({time})';
		return (req, res, next) => {
			next(); // let the request continue

			let { method, protocol, route, baseUrl, path } = req;

			path = !baseUrl
				? path
				: baseUrl + path;
			route = !route
				? '*'
				: route.path;

			onFinished(res, (err, res) => {
				const { statusCode } = res;
				let statusColour = statusCode >= 500
						? '&4' // server error, red
						: statusCode >= 400
							? '&6' // client error, yellow
							: statusCode >= 300
								? '&3' // redirects, cyan
								: statusCode >= 200
									? '&2' // success, green
									: '&f',
					ms = reqDuration(process.hrtime()).toLocaleString(),
					timeColour = ms >= 10
						? '&c' // took too long, light red
						: ms >= 1
							? '&e' // over 1ms is a little slow, light yellow
							: '&a', // speed™️, light green
					time = `${ms} ms`;

				let format = typeof this.options.express[id].format === 'function'
					? this.options.express[id].format(req)
					: this.options.express[id].format;

				let text = format
					.replace(/{+ ?method ?}+/gmi, method)
					.replace(/{+ ?protocol ?}+/gmi, protocol.toUpperCase())
					.replace(/{+ ?route ?}+/gmi, route)
					.replace(/{+ ?path ?}+/gmi, path)
					.replace(/{+ ?status-colou?r ?}+/gmi, statusColour)
					.replace(/{+ ?status ?}+/gmi, statusCode)
					.replace(/{+ ?time-colou?r ?}+/gmi, timeColour)
					.replace(/{+ ?time ?}+/gmi, time);

				this[this.options.express[id].level](Logger.format(text));
			});
		};
	}
};
