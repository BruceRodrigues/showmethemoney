module.exports = {
    purge: [
        './src/**/*.{js,jsx,ts,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        screens: {
            sm: '320px',
            md: '830px',
            lg: '1080px',
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
