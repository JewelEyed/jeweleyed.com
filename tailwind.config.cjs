/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		screens: {
			'ui-small': {'max': '767px'},
			'ui-medium': {'max': '1023px'},
			'ui-large': {'max': '1279px'},
			'uir-small': {'max': '767px', 'min': '1px'},
			'uir-medium': {'max': '1023px', 'min': '767px'},
			'uir-large': {'max': '1279px', 'min': '1023px'},
			'ui-huge': {'min': '1279px'},
		}
	},
	plugins: [],
}
