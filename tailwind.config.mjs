/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
				shake: {
					'0%': { 'margin-left': '0rem' },
					'25%': { 'margin-left': '0.5rem' },
					'75%': { 'margin-left': '-0.5rem' },
					'100%': { 'margin-left': '0rem' },
				},
			},
			animation: {
				shaking: 'shake 0.2s ease-in-out 0s 2',
			},
			boxShadow: {
				custom: '0 0 0.4em red',
			},
		},
	},
	plugins: [],
}
