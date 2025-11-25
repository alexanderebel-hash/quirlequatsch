import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Apple System Colors
        primary: {
          DEFAULT: '#007AFF',
          hover: '#0066CC',
        },
        success: {
          DEFAULT: '#34C759',
          hover: '#2DB84D',
        },
        warning: '#FF9500',
        danger: '#FF3B30',
        purple: '#AF52DE',
        indigo: '#5856D6',
        hulk: {
          DEFAULT: '#34C759',
          dark: '#2E7D32',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', 'sans-serif'],
      },
      fontSize: {
        'large-title': ['34px', { lineHeight: '41px', letterSpacing: '-0.5px', fontWeight: '700' }],
        'title1': ['28px', { lineHeight: '34px', letterSpacing: '-0.3px', fontWeight: '700' }],
        'title2': ['22px', { lineHeight: '28px', letterSpacing: '-0.2px', fontWeight: '600' }],
        'title3': ['20px', { lineHeight: '25px', letterSpacing: '-0.1px', fontWeight: '600' }],
        'headline': ['17px', { lineHeight: '22px', letterSpacing: '0', fontWeight: '600' }],
        'body': ['17px', { lineHeight: '22px', letterSpacing: '0', fontWeight: '400' }],
        'callout': ['16px', { lineHeight: '21px', letterSpacing: '0', fontWeight: '400' }],
        'subheadline': ['15px', { lineHeight: '20px', letterSpacing: '0', fontWeight: '400' }],
        'footnote': ['13px', { lineHeight: '18px', letterSpacing: '0', fontWeight: '400' }],
        'caption1': ['12px', { lineHeight: '16px', letterSpacing: '0', fontWeight: '400' }],
        'caption2': ['11px', { lineHeight: '13px', letterSpacing: '0.06px', fontWeight: '400' }],
      },
      borderRadius: {
        'xs': '4px',
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '20px',
        '2xl': '24px',
      },
      boxShadow: {
        'xs': '0 1px 2px rgba(0, 0, 0, 0.04)',
        'sm': '0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04)',
        'md': '0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.04)',
        'lg': '0 12px 40px rgba(0, 0, 0, 0.12), 0 4px 12px rgba(0, 0, 0, 0.06)',
      },
      backdropBlur: {
        'apple': '20px',
      },
    },
  },
  plugins: [],
};

export default config;
