#!/usr/bin/env node
var { compile } = require("./index.js");
var { parseArgs } = require("node:util");

var options = {
  file: {
    type: "string",
    short: "f",
  },
  outdir: {
    type: "string",
    short: "o",
  },
};
var { values, positionals } = parseArgs({ options });

compile(values.file, values.outdir);
