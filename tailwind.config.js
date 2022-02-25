module.exports = {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'b-1': '#1A374D',
                'b-2': '#406882',
                'w-1': '#6998AB',
                'w-2': '#B1D0E0',
                'l-1': '#FCF8EC',
                'l-2': '#D0E8F2',
                'l-3': '#C0DBE6',
                'l-4': '#456268',
                'd-1': '#1A374D',
                'd-2': '#406882',
                'd-3': '#365B74',
                'd-4': '#B1D0E0',
            }
        },
    },
    plugins: [
        require("tailwind-scrollbar-hide")
    ],
}