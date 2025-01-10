/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
     "./node_modules/@shadcn/ui/dist/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
				yellowGreen : 'rgb(238, 255, 37)',
				yellowOrange:'rgb(217, 153, 4)',
				darkGray : 'rgb(21, 21, 21)',
				mediumGray:'rgb(115, 115, 115)',
				lightGray : 'rgb(232, 232, 232)',
				charcoal : 'rgb(31, 41, 55)',
				whisperGray : 'rgb(243, 243, 243)',
				dimGray:'rgb(68, 68, 68)',
				goldenrod : 'rgb(205, 144, 3)',
				raisinBlack : 'rgb(17, 24, 39)',
				Tan : 'rgb(209, 160, 84)',
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

