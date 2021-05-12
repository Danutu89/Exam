import sveltePreprocess from 'svelte-preprocess';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
export default {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: sveltePreprocess(),
	kit: {
		// By default, `npm run build` will create a standard Node app.
		// You can create optimized builds for different platforms by
		// specifying a different adapter

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		vite: {
			resolve: {
				alias: {
					$components: resolve('src/components'),
					$actions: resolve('./src/actions'),
					$stores: resolve('./src/stores'),
					$utils: resolve('./src/utils'),
					$constants: resolve('./src/constants'),
					$reducers: resolve('./src/reducers'),
					$interceptors: resolve('./src/interceptors'),
					$vendor: resolve('./src/vendor'),
					$types: resolve('./src/types')
				}
			}
		}
	}
};
