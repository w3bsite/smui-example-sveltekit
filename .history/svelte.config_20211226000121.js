import preprocess from 'svelte-preprocess';
import vercel from '@sveltejs/adapter-vercel';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		// ## This part is necessary for SMUI!
		vite: {
			ssr: {
				noExternal: [/^@material\//, /^@smui(?:-extra)?\//]
			}
		}
	}
};

export default config;
