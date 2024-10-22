/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
        extend: {
            colors:{
                "Pale-blue": "hsl(225, 100%, 94%)",
                "Bright-blue": "hsl(245, 75%, 52%)",
                "Very-pale-blue": "hsl(225, 100%, 98%)",
                "Desaturated-blue": "hsl(224, 23%, 55%)",
                "Dark-blue": "hsl(223, 47%, 23%)",
                "hover-blue": "hsl(245deg 75% 52% / 75%)",
                "shadow-blue": "hsl(225deg 76.83% 87.05%);"
            },
            backgroundImage:{
                "desktop-pattern-img": "url('/images/pattern-background-desktop.svg')"
            },
            fontFamily:{
                "red-hat": ["Red Hat Display", "sans-serif"],
            },
        },
    },
    plugins: [],
}

