/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	daisyui: {
		themes: [
		  {
			theme: {
				"primary": "#640072",
				"secondary": "#020024",
				"accent": "#05dcf9",
				"neutral": "#180745",
				"base-100": "#140639",
			}
		  }
		]
	  },
	plugins: [require("daisyui")]
};

module.exports = config;
