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
			default: "#3a3a3a",
			primary: "#f2be54",
			secondary: "#1b4462",
			white: "#fff",
			slate: {
				100: "#f1f5f9",
			},
		},
		container: {
			center: true,
			padding: "2rem",
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
