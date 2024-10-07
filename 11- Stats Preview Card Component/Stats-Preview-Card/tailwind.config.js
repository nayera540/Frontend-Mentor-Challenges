/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
        extend: {
            fontSize:{
                base: '15px',
            },
            fontFamily: {
                inter: ['"Inter"', 'system-ui'],
                lexand: ["Lexend Deca", "sans-serif"],
            },
            colors: {
                "trans--white-main": "hsla(0, 0%, 100%, 0.75)",
                "trans-white-stat": "hsla(0, 0%, 100%, 0.6)",
                "very-dark-blue": "hsl(233, 47%, 7%)",
                "dark-blue": "hsl(244, 38%, 16%)",
                "soft-violet": "hsl(277, 64%, 61%)",
                "img-soft-violet": "hsl(277deg 71.73% 37.22% / 52%);"
            },
        },
    },
    plugins: [],
};
