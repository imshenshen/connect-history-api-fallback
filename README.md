# forked from bripkens/connect-history-api-fallback

# egg-history-api-fallback

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-history-api-fallback.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-history-api-fallback
[travis-image]: https://img.shields.io/travis/eggjs/egg-history-api-fallback.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-history-api-fallback
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-history-api-fallback.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-history-api-fallback?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-history-api-fallback.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-history-api-fallback
[snyk-image]: https://snyk.io/test/npm/egg-history-api-fallback/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-history-api-fallback
[download-image]: https://img.shields.io/npm/dm/egg-history-api-fallback.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-history-api-fallback

<!--
Description here.
-->

## Install

```bash
$ npm i egg-history-api-fallback --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.historyApiFallback = {
  enable: true,
  package: 'egg-history-api-fallback',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.historyApiFallback = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
