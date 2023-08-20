/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				white: "#FFFFFF",
				black: "#0E0E0E",
				cyan: "#C2FFF8",
				purple: "#EBC1FF",
				yellow: "#FFF9C3",
			},
		},
	},
	plugins: [],
}
