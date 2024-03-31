const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,jsx,tsx,ts}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter var", ...defaultTheme.fontFamily.sans],
            },
        },
        plugins: [],
    },
};
