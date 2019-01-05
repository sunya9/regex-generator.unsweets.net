import postcss from 'rollup-plugin-postcss'
import cssnext from 'postcss-cssnext'
import cssImport from 'postcss-import'
import serve from 'rollup-plugin-serve'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import nodeGlobals from 'rollup-plugin-node-globals'
import babel from 'rollup-plugin-babel'

const config = {
  input: 'src/js/main.js',
  output: {
    file: 'build/js/main.js',
    format: 'umd'
  },
  plugins: [
    nodeResolve({
      browser: true,
      main: true,
      jsnext: true
    }),
    commonjs(),
    nodeGlobals(),
    postcss(),
    babel()
  ]
}

if(process.env.NODE_ENV !== 'production') {
  config.plugins.push(serve({
    contentBase: ['build', 'public'],
    historyApiFallback: false
  }))
}

export default config