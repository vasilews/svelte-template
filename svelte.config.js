import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter(),
    vite: {
      test: {
        mockReset: true,
        environment: 'jsdom',
        globals: true,
        setupFiles: 'src/setupTests.ts',
        deps: {
          inline: ['unique-names-generator'],
        },
      },
    },
  },
}

export default config
