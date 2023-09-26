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
			  "primary": "#a8683e",
			  "secondary": "#10250e",
			  "accent": "#458bba",
			  "neutral": "#341538",
			  "base-100": "#1c0b1e",
			}
		  }
		]
	  },
	plugins: [require("daisyui")]
};

module.exports = config;
