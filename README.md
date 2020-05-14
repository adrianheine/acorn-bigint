# BigInt support for Acorn

[![NPM version](https://img.shields.io/npm/v/acorn-bigint.svg)](https://www.npmjs.org/package/acorn-bigint)

This is a plugin for [Acorn](http://marijnhaverbeke.nl/acorn/) - a tiny, fast JavaScript parser, written completely in JavaScript.

It implements support for arbitrary precision integers as defined in the stage 3 proposal [BigInt: Arbitrary precision integers in JavaScript](https://github.com/tc39/proposal-bigint). The emitted AST follows [an ESTree proposal](https://github.com/estree/estree/blob/132be9b9ec376adbc082dd5f6ba78aefd7a1a864/experimental/bigint.md).

## Usage

This module provides a plugin that can be used to extend the Acorn `Parser` class.
You can either choose to use it via CommonJS (for example in Node.js) like this

```javascript
const {Parser} = require('acorn');
const bigInt = require('acorn-bigint');
Parser.extend(bigInt).parse('100n');
```

or as an ECMAScript module like this:

```javascript
import {Parser} from 'acorn';
import bigInt from 'path/to/acorn-bigint.mjs';
Parser.extend(bigInt).parse('100n');
```

## License

This plugin is released under an [MIT License](./LICENSE).
