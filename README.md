# leekslazylogger-express

[![npm](https://img.shields.io/npm/v/leekslazylogger-express/latest?style=flat-square)](https://www.npmjs.com/package/leekslazylogger-express)   [![GitHub issues](https://img.shields.io/github/issues/eartharoid/leekslazylogger-express?style=flat-square)](https://github.com/eartharoid/leekslazylogger-express/issues)    [![GitHub stars](https://img.shields.io/github/stars/eartharoid/leekslazylogger-express?style=flat-square)](https://github.com/eartharoid/leekslazylogger-express/stargazers)    [![GitHub forks](https://img.shields.io/github/forks/eartharoid/leekslazylogger-express?style=flat-square)](https://github.com/eartharoid/leekslazylogger-express/network)    [![GitHub license](https://img.shields.io/github/license/eartharoid/leekslazylogger-express?style=flat-square)](https://github.com/eartharoid/leekslazylogger-express/blob/master/LICENSE)    ![Codacy grade](https://img.shields.io/codacy/grade/8af9d1431018457385c8774147410009?logo=codacy&style=flat-square)    [![Discord support server](https://discordapp.com/api/guilds/451745464480432129/embed.png?style=shield)](https://discord.gg/pXc9vyC)

## About

leekslazylogger-express is a logger middleware for express.

## Features

- Colours :)
- Status code, route, and time in ms
- Placeholders

## Getting Started

[**Click here to go the docs for customisation instructions.**](https://logger.eartharoid.me/extensions/express/)

```js
const ExpressLogger = require('leekslazylogger-express');
const log = new ExpressLogger();

// require express
const express = require('express');
const app = express();

// use logger middleware
app.use(log.express(options));
```

## Support

**[Go to the docs](https://logger.eartharoid.me/extensions/express/)**, or ask for help in [#general-support](https://discord.com/channels/451745464480432129/475351519516950548) on [Discord](https://discord.gg/pXc9vyC).

[![Discord](https://discordapp.com/api/guilds/451745464480432129/widget.png?style=banner4)](https://discord.gg/pXc9vyC)

## Donate

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/eartharoid)
