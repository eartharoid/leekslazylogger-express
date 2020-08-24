# leekslazylogger-express

[![npm](https://img.shields.io/npm/v/leekslazylogger-express/latest?style=flat-square)](https://www.npmjs.com/package/leekslazylogger-express)   [![GitHub issues](https://img.shields.io/github/issues/eartharoid/leekslazylogger-express?style=flat-square)](https://github.com/eartharoid/leekslazylogger-express/issues)    [![GitHub stars](https://img.shields.io/github/stars/eartharoid/leekslazylogger-express?style=flat-square)](https://github.com/eartharoid/leekslazylogger-express/stargazers)    [![GitHub forks](https://img.shields.io/github/forks/eartharoid/leekslazylogger-express?style=flat-square)](https://github.com/eartharoid/leekslazylogger-express/network)    [![GitHub license](https://img.shields.io/github/license/eartharoid/leekslazylogger-express?style=flat-square)](https://github.com/eartharoid/leekslazylogger-express/blob/master/LICENSE)    ![Codacy grade](https://img.shields.io/codacy/grade/8af9d1431018457385c8774147410009?logo=codacy&style=flat-square)    [![Discord support server](https://discordapp.com/api/guilds/451745464480432129/embed.png?style=shield)](https://discord.gg/pXc9vyC)

## About

leekslazylogger-express is a logger middleware for express.

## Features

- Colours :)
- Status code, route, and time in ms

## Getting Started

**IMPORTANT:** This is an addon for leekslazylogger. For it to work you must have already installed and set up the logger. This should be one of the first middleware called and must go BEFORE any routes.

```js
const Logger = require('leekslazylogger');
const log = new Logger();

const app = express();

app.use(require('leekslazylogger-express'));

...

// other middleware and router
```

## Support

**[Go to the wiki](https://logger.eartharoid.me)**, or ask for help in [#support](https://discordapp.com/channels/451745464480432129/475351519516950548) on [Discord](https://discord.gg/pXc9vyC).

[![Discord](https://discordapp.com/api/guilds/451745464480432129/widget.png?style=banner4)](https://discord.gg/pXc9vyC)

## Donate

[Buy me a coffee if you want :)](https://ko-fi.com/eartharoid)
