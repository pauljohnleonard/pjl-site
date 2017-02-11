import rollup      from 'rollup'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs    from 'rollup-plugin-commonjs';
import uglify      from 'rollup-plugin-uglify'

export default {
  entry: 'appjs/app/main_aot.js',
  dest: 'aot-build.min.js', // output a single application bundle
  sourceMap: false,
  format: 'iife',
  plugins: [
      nodeResolve({jsnext: true, module: true}),
      commonjs({
        include: 'node_modules/rxjs/**'
      }),
      uglify()
	    ],

    onwarn: function (message) {
        // Suppress this error message... there are hundreds of them. Angular team says to ignore it.
        // https://github.com/rollup/rollup/wiki/Troubleshooting#this-is-undefined
        if (/The 'this' keyword is equivalent to 'undefined' at the top level of an ES module, and has been rewritten./.test(message)) {
            return;
        }
        console.error(message);
    }
}
