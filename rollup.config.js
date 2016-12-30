import postcss from 'rollup-plugin-postcss'
import cssnext from 'postcss-cssnext'
import cssImport from 'postcss-import'
import serve from 'rollup-plugin-serve'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import nodeGlobals from 'rollup-plugin-node-globals'
import babel from 'rollup-plugin-babel'

const config = {
  entry: 'src/js/main.js',
  dest: 'build/js/main.js',
  plugins: [
    nodeResolve({
      browser: true,
      main: true,
      jsnext: true
    }),
    commonjs(),
    nodeGlobals(),
    postcss({
      plugins: [
        cssImport(),
        cssnext()
      ]
    }),
    babel()
  ]
}

if(process.env.NODE_ENV !== 'production') {
  config.plugins.push(serve({
    contentBase: 'public',
    historyApiFallback: false
  }))
}

export default config