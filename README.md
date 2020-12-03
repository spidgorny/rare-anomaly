# koa backend, react frontend, everything TypeScript, WebSockets

[![build status](https://img.shields.io/travis/com/spidgorny/lass.svg)](https://travis-ci.com/spidgorny/lass)
[![code coverage](https://img.shields.io/codecov/c/github/spidgorny/lass.svg)](https://codecov.io/gh/spidgorny/lass)
[![code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![made with lass](https://img.shields.io/badge/made_with-lass-95CC28.svg)](https://lass.js.org)
[![license](https://img.shields.io/github/license/spidgorny/lass.svg)](LICENSE)
[![npm downloads](https://img.shields.io/npm/dt/lass.svg)](https://npm.im/lass)

> This a quickstart boilerplate for an application that
> uses Koa as server, React as a frontend, connects them together
> using WebSockets and uses TypeScript everywhere.

![](docs/screenshot.png)

Upon connecting the browser is sending it's userAgent to the server.

The time is being sent by Koa backend every second - React just updates it.

The [Send XXX] button sends a message to Koa backend - Koa displays it in the logs.

```bash
SockJS v0.3.21 bound to "/sock"
√  success   Listening to 761K7Y2:3000
GET /sock/info?t=1607002093916 2ms 200
GET /sock/243/jgko1fyi/websocket 3ms (unfinished)
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36
XXX 0.1649358394494378
XXX 0.5709051519790933
```

## Table of Contents



## Install

[yarn][]:

```sh
yarn
```


## Usage

```
yarn run dev
```

## Todo

* [ ] https://github.com/intesso/connect-livereload maybe

## Contributors

Slawa

## License


##

[npm]: https://www.npmjs.com/

[yarn]: https://yarnpkg.com/
