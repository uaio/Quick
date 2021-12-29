import { name, version } from './package.json';
import { terser } from 'rollup-plugin-terser';
import cfg from './rollup.config.base';
export default {
  input: 'src/main.js',
  output: {
    file: `dist/${name}.${version}.min.js`,
    format: 'iife',
    name
  },
  plugins: [...cfg.plugins, terser()]
};
