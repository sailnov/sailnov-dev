import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                sans: ["Noto Sans JP", "sans-serif"],
            },
            animation: {
                "pop-blob": "pop-blob 10s infinite",
                "pop-blob2": "pop-blob2 10s infinite",
                "pop-blob3": "pop-blob3 10s infinite",
            },
            keyframes: {
                "pop-blob": {
                    "0%": { transform: "scale(1)" },
                    "33%": { transform: "scale(1.2)" },
                    "66%": { transform: "scale(0.8)" },
                    "100%": { transform: "scale(1)" },
                },
                "pop-blob2": {
                    "0%": { transform: "scale(1)" },
                    "50%": { transform: "scale(1.2)" },
                    "80%": { transform: "scale(0.8)" },
                    "100%": { transform: "scale(1)" },
                },
                "pop-blob3": {
                    "0%": { transform: "scale(1)" },
                    "20%": { transform: "scale(1.2)" },
                    "50%": { transform: "scale(0.8)" },
                    "100%": { transform: "scale(1)" },
                },
                "bg-position": {
                    "0%": { backgroundPosition: "0% 50%" },
                    "100%": { backgroundPosition: "100% 50%" },
                },
            },
            colors: {
                "filter": {
                    "blur-20": "blur(20px)",
                    "blur-25": "blur(25px)",
                }
            }
        },
    },
    content: [
        "./pages/**/*.vue",
        "./layouts/**/*.vue",
        "./components/**/*.vue",
        "./nuxt.config.{js,ts}",
    ],
};