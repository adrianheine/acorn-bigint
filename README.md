# BigInt support for Acorn

[![NPM version](https://img.shields.io/npm/v/acorn-bigint.svg)](https://www.npmjs.org/package/acorn-bigint)

This is a plugin for [Acorn](http://marijnhaverbeke.nl/acorn/) - a tiny, fast JavaScript parser, written completely in JavaScript.

It implements support for arbitrary precision integers as defined in the stage 4 proposal [BigInt: Arbitrary precision integers in JavaScript](https://github.com/tc39/proposal-bigint). The emitted AST follows [ESTree](https://github.com/estree/estree/blob/master/es2020.md#bigintliteral).

## Usage

This module provides a plugin that can be used to extend the Acorn `Parser` class:

```javascript
const {Parser} = require('acorn');
const bigInt = require('acorn-bigint');
Parser.extend(bigInt).parse('100n');
```

## License

This plugin is released under an [MIT License](./LICENSE).
