/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#64CCC5',
				secondary: '#F4F4F4',
				tertiary: '#9E9E9E',
				accent: '#18181C',
				moon:'#222228',
				dark: '#9E9E9E',
				gradientStart: '#FF9898',
				gradientEnd: '#8054FF',
			},
			animation: {
				rotateInPlace: 'rotateInPlace 10s linear infinite', // Custom rotation animation
			  },
			  keyframes: {
				rotateInPlace: {
				  '0%': { transform: 'rotate(0deg)' },
				  '100%': { transform: 'rotate(360deg)' },
				},
			  },

			  gradientColorStops: {
				'custom-gradient-start': 'rgba(251, 251, 251, 0.4)',
				'custom-gradient-middle': 'rgba(6, 248, 225, 0.4)',
				'custom-gradient-end': 'rgba(100, 204, 197, 0.4)',
			  },
		},
	},
	plugins: [],
}
