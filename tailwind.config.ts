import type { Config } from 'tailwindcss'

const twColors = require('tailwindcss/colors')

const colors = {
	transparent: twColors.transparent,
	black: '#2e3239',
	gray: 'gray',
	white: twColors.white,
	secondary: '#161D25',
	primary: '#ff9902',
	'bg-color': '#f2f2f5',
	aqua: '#268697',
	red: twColors.red[400]
}

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		colors,
		extend: {}
	},
	plugins: []
}
export default config
