import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';

export default {
  plugins: [
    resolve({ browser: true }),
    json(),
    commonjs({ browser: true }),
    babel({ exclude: 'node_modules/**', babelHelpers: 'runtime' })
  ]
};
