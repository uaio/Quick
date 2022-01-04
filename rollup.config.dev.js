import { name } from './package.json';
import serve from 'rollup-plugin-serve';
import cfg from './rollup.config.base';
const fs = require('fs');

export default {
  input: 'src/main.js',
  output: {
    file: `dist/${name}.dev.js`,
    format: 'iife',
    name
  },
  plugins: [
    ...cfg.plugins,
    serve({
      open: true,
      openPage: '',
      contentBase: '',
      host: '0.0.0.0',
      port: 10000
    })
  ],
  watch: {
    include: 'src/**'
  }
};
