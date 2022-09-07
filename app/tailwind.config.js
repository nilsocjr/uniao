module.exports = {
	future: {
		removeDeprecatedGapUtilities: true,
	},
	mode: "jit",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	], // remove unused styles in production
	darkMode: "media", // or 'media' or 'class'
	theme: {
		colors: {
			primary: "#f2be54",
			secondary: "#1b4462",
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
