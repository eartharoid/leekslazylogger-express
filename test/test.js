const express = require('express');
const app = express();
const port = 3000;

const Logger = require('../lib');
const log = new Logger({
	express: {
		format: '{method} {protocol} &7{path} &6{route} {status-colour}{status} {time-color}({time})'
	}
});

app.use(log.express); // logger

app.get('*', (req, res) => {
	res.send(log.options);
});

app.listen(port, () => {
	log.info(`Example app listening at http://localhost:${port}`);
});