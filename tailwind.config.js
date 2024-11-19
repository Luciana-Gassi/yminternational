/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				controllerfour: ["ControllerFour", "sans-serif"],
				orbitron: ["Orbitron", "sans-serif"],
				proximanova: ["Proxima Nova", "sans-serif"],
			},
			colors: {
				"ym-blue": "#1b365d",
				"ym-burgundy": "#990000",
				"ym-lightred": "#c8102e",
				"ym-gray": "#4a4a4a",
				"ym-light-blue": "#4f9be0",
			},
		},
	},
	plugins: [],
};
