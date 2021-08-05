import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import babel from 'rollup-plugin-babel';
import css from 'rollup-plugin-css-only';

const production = !process.env.ROLLUP_WATCH;

// function serve() {
// 	let server;
	
// 	function toExit() {
// 		if (server) server.kill(0);
// 	}

// 	return {
// 		writeBundle() {
// 			if (server) return;
// 			server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
// 				stdio: ['ignore', 'inherit', 'inherit'],
// 				shell: true
// 			});

// 			process.on('SIGTERM', toExit);
// 			process.on('exit', toExit);
// 		}
// 	};
// }

export default {
	input: 'src/main.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'public/build/bundle.js'
	},
	plugins: [
		css({ output: 'public/build/vendor.css' }),
		svelte({
			// enable run-time checks when not in production
			dev: !production,
			// we'll extract any component CSS out into
			// a separate file - better for performance
			css: css => {
				css.write('bundle.css');
			}
		}),
		postcss(),
		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration -
		// consult the documentation for details:
		// https://github.com/rollup/plugins/tree/master/packages/commonjs
		resolve({
			browser: true,
			dedupe: ['svelte']
		}),
		commonjs(),
		babel(),

		// In dev mode, call `npm run start` once
		// the bundle has been generated
		!production && serve({
            contentBase: 'public',
            historyApiFallback: true,
            host: 'localhost',
            port: 5000
        }),
        
		// !production && serve(),

		// Watch the `public` directory and refresh the
		// browser on changes when not in production
		!production && livereload('public'),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser()
	],
	watch: {
		clearScreen: false
	}
};
