/** @type {import('tailwindcss').Config} */
import personal from './src/personal'

module.exports = {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: { 
            colors: {
                'button-color': personal.colors.buttonColor,
                'link-color': personal.colors.LinkHighlightColor
            }
        },
    },
    plugins: [],
}

