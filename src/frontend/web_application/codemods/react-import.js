const prettier = require('prettier');

module.exports.parser = 'ts';

/**
 * @param {import("jscodeshift").FileInfo} file File
 * @param {import("jscodeshift").API} api
 * @returns string | boolean
 */
module.exports = function parse(file, api) {
  const j = api.jscodeshift;

  const root = j(file.source);

  // migrate react import
  root.find(j.ImportDeclaration).forEach((el) => {
    switch (el.value.source.value) {
      case 'react':
        el.replace("import * as React from 'react';");
        break;
      // case 'prop-types':
      //   el.replace('');
      //   break;
      default:
        break;
    }
  });

  const ret = prettier.format(root.toSource());
  return ret;
};
