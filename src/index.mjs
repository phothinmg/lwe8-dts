import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const { compile } = require("./index.js");
export { compile };
