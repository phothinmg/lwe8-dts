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

### `compile`

#### Parameters

##### `file`

- Path to Javascript file , that want to generate dts file, `.js`,`.cjs`,`.mjs` extensions are supported.
- type: `string`

##### `outdir`

- Optional
- Output directory of dts file, same directory of Javascript file as default.
- type : `string`

##### Example

```js
import { compile } from "lwe8-dts";

const file = "src/index.js";
const out = "dist";

compile(file, out);
```

### CLI

#### `-f` or `--file`

- Path to Javascript file.

#### `-o` or `--outdir`

- Optional
- Output directory of dts file

##### Example

```shell
npx dts -f src/index.js -o dist
```

> 💡 If you import some local module to Javascript file like `import foo from "./foo/index.js"`, not like `import foo from "./foo"`
> will generate related dts file.

## License

[MIT][file-license] © [Pho Thin Mg][ptm]

<!-- Definitions -->

[file-license]: LICENSE
[ptm]: https://github.com/phothinmg
