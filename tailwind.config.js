/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.jsx",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#ffffff",
                secondary: "#fafafa",
                accent: "#f99336",
            },
            fontFamily: {
                obitron: ["Orbitron", "sans-serif"],
            },
        },
    },
    plugins: [],
};
