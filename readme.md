# lwe8-dts

## content

- [Overview](#overview)
- [Install](#install)
- [Use](#use)
- [API](#api)
- [License](#license)

## Overview

Getting the DTS from a JavaScript file.

## Install

```shell
npm i lwe8-dts
```

```shell
pnpm i lwe8-dts
```

## Use

### cli

```shell
npx dts -f bar/foo.js
```

### Common Js

```js
var { compile } = require("lwe8-dts");
```

### ESM

```js
import { compile } from "lwe8-dts";
```

## API

### Exports

- This package exports:

  - javascript function: `compile`

- There is no default export.

## License

[MIT][file-license] © [Pho Thin Mg][ptm]

<!-- Definitions -->

[file-license]: LICENSE
[ptm]: https://github.com/phothinmg
