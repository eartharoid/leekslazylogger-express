const express = require('express');
const app1 = express();
const app2 = express();

const requestIp = require('request-ip');
app2.use(requestIp.mw());

const Logger = require('../lib');
const log = new Logger({
	name: 'Express test',
	levels: {
		http: {
			format: '[{timestamp} | INFO] [HTTP] {text}'
		}
	}
});

app1.use(log.express()); // logger
app2.use(log.express({
	format: req => `TWO {method} ${req.clientIp} {protocol} &7{path} &6{route} {status-colour}{status} {time-color}({time})`,
	level: 'http'
})); // logger

app1.get('/', (req, res) => {
	res.send(log.options);
});
app2.get('/', (req, res) => {
	res.send(log.options);
});

app1.get('/:page', (req, res) => {
	res.send({
		status: '200 OK'
	});
});
app2.get('/:page', (req, res) => {
	res.send({
		status: '200 OK'
	});
});

app1.listen(3000, () => {
	log.info('Example app 1 listening at http://localhost:3000');
});
app2.listen(3001, () => {
	log.info('Example app 2 listening at http://localhost:3001');
});