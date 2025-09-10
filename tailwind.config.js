/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            // Design Tokens - Color System
            colors: {
                // Core Colors
                ink: '#0F172A',
                surface: '#FFFFFF',
                muted: '#64748B',
                accent: '#7C3AED',
                'accent-hover': '#6D28D9',

                // Extended color palette
                ink: {
                    50: '#f8fafc',
                    100: '#f1f5f9',
                    200: '#e2e8f0',
                    300: '#cbd5e1',
                    400: '#94a3b8',
                    500: '#64748b',
                    600: '#475569',
                    700: '#334155',
                    800: '#1e293b',
                    900: '#0F172A',
                },
                surface: {
                    50: '#FFFFFF',
                    100: '#f8fafc',
                    200: '#f1f5f9',
                    300: '#e2e8f0',
                    400: '#cbd5e1',
                    500: '#94a3b8',
                    600: '#64748b',
                    700: '#475569',
                    800: '#334155',
                    900: '#1e293b',
                },
                muted: {
                    50: '#f8fafc',
                    100: '#f1f5f9',
                    200: '#e2e8f0',
                    300: '#cbd5e1',
                    400: '#94a3b8',
                    500: '#64748B',
                    600: '#475569',
                    700: '#334155',
                    800: '#1e293b',
                    900: '#0f172a',
                },
                accent: {
                    50: '#f5f3ff',
                    100: '#ede9fe',
                    200: '#ddd6fe',
                    300: '#c4b5fd',
                    400: '#a78bfa',
                    500: '#8b5cf6',
                    600: '#7C3AED',
                    700: '#6D28D9',
                    800: '#5b21b6',
                    900: '#4c1d95',
                },
                // Legacy brand colors for compatibility
                brand: {
                    dark: '#0F172A',
                    primary: '#7C3AED',
                    muted: '#64748B',
                    accent: '#7C3AED',
                }
            },
            // Typography Scale
            fontSize: {
                'xs': ['0.75rem', { lineHeight: '1rem' }],
                'sm': ['0.875rem', { lineHeight: '1.25rem' }],
                'base': ['1rem', { lineHeight: '1.75rem' }], // leading-7
                'lg': ['1.125rem', { lineHeight: '1.75rem' }],
                'xl': ['1.25rem', { lineHeight: '1.75rem' }],
                '2xl': ['1.5rem', { lineHeight: '2rem' }], // h3
                '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // h2
                '4xl': ['2.25rem', { lineHeight: '2.5rem' }], // h1
                '5xl': ['3rem', { lineHeight: '1' }], // h1 large
                '6xl': ['3.75rem', { lineHeight: '1' }],
                '7xl': ['4.5rem', { lineHeight: '1' }],
            },
            // Spacing Scale
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '128': '32rem',
            },
            // Border Radius
            borderRadius: {
                'none': '0px',
                'sm': '0.125rem',
                'DEFAULT': '0.25rem',
                'md': '0.375rem',
                'lg': '0.5rem',
                'xl': '0.75rem',
                '2xl': '1rem', // 16px - cards
                '3xl': '1.5rem', // 24px - sections
                'full': '9999px',
            },
            // Box Shadows
            boxShadow: {
                'xs': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
                'sm': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
                'DEFAULT': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
                'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
                'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
                'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
                '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
                'inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
                'none': 'none',
                // Custom shadows
                'card': '0 10px 25px rgba(0, 0, 0, 0.06)',
                'card-hover': '0 12px 30px rgba(0, 0, 0, 0.072)',
            },
            // Container
            maxWidth: {
                '7xl': '80rem',
            },
            // Font Family
            fontFamily: {
                sans: ['Inter', 'Cairo', 'system-ui', 'sans-serif'],
                arabic: ['Cairo', 'Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}

