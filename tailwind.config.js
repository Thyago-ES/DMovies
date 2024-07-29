/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"main-color": "var(--main-color)",
				"search-text": "var(--search-text)",
				"bg-color": "var(--bg-color)",
				"text-color": "var(--text-color)",
				"main-color-opacity": "rgba(6, 41, 107, 0.8)",
			},
			gridTemplateColumns: {
				"auto-fill": "repeat(auto-fill, minmax(300px, 1fr))",
			},
			margin: {
				center: "0 auto",
			},
		},
	},
	plugins: [],
};
