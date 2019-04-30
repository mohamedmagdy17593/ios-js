import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'

const config = {
  input: 'src/index.js',
  output: [
    {
      file: `dist/index.umd.js`,
      format: 'umd',
    },
    {
      file: `dist/index.amd.js`,
      format: 'amd',
    },
    {
      file: `dist/index.cjs.js`,
      format: 'cjs',
    },
    {
      file: `dist/index.esm.js`,
      format: 'esm',
    },
    {
      file: `dist/index.iife.js`,
      format: 'iife',
    },
  ],
  plugins: [
    babel({exclude: 'node_modules/**'}),
    resolve(),
    commonjs({extensions: ['.js', '.jsx']}),
  ],
}

export default config
