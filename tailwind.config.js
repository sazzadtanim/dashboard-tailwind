module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		// different screen sizes
		// access it by using max-w-screen-sm max-w-screen-xl etc or lg:w-20
		screens: {
			'xs': '16em', //16em kore plus kore
			'sm': '32em', //
			'md': '48em', //
			'lg': '64em', //
			'xl': '80em', //
			'2xl': '96em', //
			'3xl': '112em',
			'4xl': '128em', // enough
			'5xl': '144em', // web-large
			'6xl': '160em', //mac pro 13 retina
			'7xl': '176em', // mac pro 15 retina
		},
		fontFamily: {
			Catamaran: "'Catamaran', sans-serif",
			Cormorant: "'Cormorant Garamond', serif",
			Merriweather: "'Merriweather', serif",
			poppins: "'Poppins', sans-serif",
		},
		extend: {
			colors: {
				rong: {
					100: 'rgba(239, 235, 194, 1)',
					200: 'rgba(137, 205, 178, 1)',
					300: 'rgba(239, 88, 63, 1)',
					400: 'rgba(61, 123, 98, 1)',
					500: 'rgba(49, 51, 64, 1)',
				},
			},
		},
	},
	plugins: [],
}
