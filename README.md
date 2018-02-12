# BigInt support for Acorn

[![NPM version](https://img.shields.io/npm/v/acorn-bigint.svg)](https://www.npmjs.org/package/acorn-bigint)

This is a plugin for [Acorn](http://marijnhaverbeke.nl/acorn/) - a tiny, fast JavaScript parser, written completely in JavaScript.

It implements support for arbitrary precision integers as defined in the stage 3 proposal [BigInt: Arbitrary precision integers in JavaScript](https://github.com/tc39/proposal-bigint). The emitted AST follows [an ESTree proposal](https://github.com/estree/estree/blob/132be9b9ec376adbc082dd5f6ba78aefd7a1a864/experimental/bigint.md).

## Usage

You can use this module directly in order to get an Acorn instance with the plugin installed:

```javascript
var acorn = require('acorn-bigint');
```

Or you can use `inject.js` for injecting the plugin into your own version of Acorn like this:

```javascript
var acorn = require('acorn-bigint/inject')(require('./custom-acorn'));
```

Then, use the `plugins` option to enable the plugiin:

```javascript
var ast = acorn.parse(code, {
  plugins: { bigInt: true }
});
```

## License

This plugin is released under the [GNU Affero General Public License](./LICENSE).
Please feel free to open an issue if this choice of license is a problem for your use-case.
