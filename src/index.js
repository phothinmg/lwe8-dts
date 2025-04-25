"use strict";
var ts = require("typescript");
var fs = require("node:fs");
var path = require("node:path");

/**
 * Getting the DTS from a JavaScript fileb
 * @param {string} file
 * @param {string} [outdir]
 */
var compile = function (file, outdir) {
  var out = outdir !== null && outdir !== void 0 ? outdir : path.dirname(file);
  if (![".js", ".cjs", ".mjs"].includes(path.extname(file))) {
    throw new Error("File extension must be `.js`,`.cjs` or `.mjs`");
  }
  /**
   * @type {string[]}
   */
  var fileNames = [file];
  /** @type {ts.CompilerOptions} */
  var options = {
    allowJs: true,
    declaration: true,
    emitDeclarationOnly: true,
    outDir: out,
  };
  // Create a Program with an in-memory emit
  /**
   * @type {Record<string,string>}
   */
  var createdFiles = {};
  /**
   * @type {ts.CompilerHost}
   */
  var host = ts.createCompilerHost(options);
  /**
   * @param {string} fileName
   * @param {string} contents
   * @returns {ts.WriteFileCallback}
   */
  host.writeFile = function (fileName, contents) {
    fileName = fileName.replace(/.js/, ".d.ts");
    fileName = fileName.replace(/.mjs/, ".d.mts");
    fileName = fileName.replace(/.cjs/, ".d.cts");
    createdFiles[fileName] = contents;
  };
  var program = ts.createProgram(fileNames, options, host);
  program.emit();

  Object.entries(createdFiles).map(function ([outName, content]) {
    var dir = path.dirname(outName);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(outName, content);
  });
};
exports.compile = compile;
