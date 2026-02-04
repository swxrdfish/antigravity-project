import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                bg: {
                    primary: '#050505',
                    grid: '#1a1a1a',
                },
                neon: {
                    red: '#ff1a1a',
                    'red-glow': 'rgba(255, 26, 26, 0.6)',
                },
                text: {
                    main: '#e0e0e0',
                    dim: '#888888',
                },
            },
            fontFamily: {
                heading: ['var(--font-orbitron)', 'sans-serif'],
                body: ['var(--font-rajdhani)', 'sans-serif'],
                brand: ['var(--font-bungee)', 'var(--font-orbitron)', 'sans-serif'],
            },
            backgroundImage: {
                'cyber-grid': 'linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)',
            },
            backgroundSize: {
                'grid': '50px 50px',
            },
            boxShadow: {
                'neon-red': '0 0 10px rgba(255, 26, 26, 0.6), 0 0 20px rgba(255, 26, 26, 0.6)',
                'neon-red-intense': '0 0 10px rgba(255, 26, 26, 0.6), 0 0 20px rgba(255, 26, 26, 0.6), 0 0 40px rgba(255, 26, 26, 0.6)',
            },
            animation: {
                'flicker': 'flicker 4s infinite alternate',
                'neon-pulse': 'neonPulse 2s ease-in-out infinite alternate',
            },
            keyframes: {
                flicker: {
                    '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': {
                        textShadow: '0 0 5px rgba(255, 26, 26, 0.6), 0 0 10px rgba(255, 26, 26, 0.6)',
                        opacity: '1',
                    },
                    '20%, 24%, 55%': {
                        textShadow: 'none',
                        opacity: '0.5',
                    },
                },
                neonPulse: {
                    '0%': {
                        textShadow: '0 0 5px rgba(255, 26, 26, 0.6), 0 0 10px rgba(255, 26, 26, 0.6), 0 0 15px rgba(255, 26, 26, 0.6)',
                    },
                    '100%': {
                        textShadow: '0 0 10px rgba(255, 26, 26, 0.6), 0 0 20px rgba(255, 26, 26, 0.6), 0 0 40px rgba(255, 26, 26, 0.6), 0 0 60px rgba(255, 26, 26, 0.6)',
                    },
                },
                scan: {
                    '0%': { top: '0%' },
                    '100%': { top: '100%' },
                }
            },
            animation: {
                'flicker': 'flicker 4s infinite alternate',
                'neon-pulse': 'neonPulse 2s ease-in-out infinite alternate',
                'scan-fast': 'scan 3s linear infinite',
            },
        },
    },
    plugins: [],
};

export default config;
