const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.astro'],
  darkMode: ['class', '[data-theme="dark"]'],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    screens: {
      lg: { max: '1366px' },
      md: { max: '700px' },
      sm: { max: '450px' },
    },
    fontFamily: {
      body: ['Inter', 'sans-serif'],
      mono: ['Menlo', 'monospace'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      bg: {
        body: 'rgb(var(--color-bg-body) / <alpha-value>)',
        gradient: 'rgb(var(--color-bg-gradient) / <alpha-value>)',
        code: 'rgb(var(--color-bg-code) / <alpha-value>)',
        selection: 'rgb(var(--color-bg-selection) / <alpha-value>)',
        border: 'rgb(var(--color-text-body) / 10%)',
      },
      primary: {
        DEFAULT: 'rgb(var(--color-primary) / <alpha-value>)',
        light: 'rgb(var(--color-primary-light) / <alpha-value>)',
        dark: 'rgb(var(--color-primary-dark) / <alpha-value>)',
      },
      secondary: {
        DEFAULT: 'rgb(var(--color-secondary) / <alpha-value>)',
      },
      text: {
        heading: 'rgb(var(--color-text-heading) / <alpha-value>)',
        body: 'rgb(var(--color-text-body) / <alpha-value>)',
        muted: 'rgb(var(--color-text-body) / 60%)',
        bold: 'rgb(var(--color-text-bold) / <alpha-value>)',
        code: 'rgb(var(--color-text-code) / <alpha-value>)',
        'code-inline': 'rgb(var(--color-text-code-inline) / <alpha-value>)',
        link: 'rgb(var(--color-secondary) / <alpha-value>)',
        selection: 'rgb(var(--color-text-selection) / <alpha-value>)',
      },
      border: {
        code: 'rgb(var(--color-border-code) / <alpha-value>)',
      },
    },
    extend: {
      height: {
        navbar: '5rem',
        footer: '5rem',
      },
      backgroundImage: {
        'bg-gradient':
          'linear-gradient(180deg, rgb(var(--color-bg-body)), rgb(var(--color-bg-body)), rgb(var(--color-bg-gradient)))',
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      const mdQuery = `@media (max-width: ${theme('screens.md.max')})`;
      const smQuery = `@media (max-width: ${theme('screens.sm.max')})`;
      addComponents({
        '.break-padding': {
          [mdQuery]: {
            marginRight: '-1.4rem',
            marginLeft: '-1.4rem',
          },
          [smQuery]: {
            marginRight: '-0.9rem',
            marginLeft: '-0.9rem',
          },
        },
        '.gradient-text': {
          color: 'transparent',
          backgroundImage:
            'linear-gradient(to bottom right, rgb(var(--color-primary-light)), rgb(var(--color-primary)), rgb(var(--color-primary-light)))',
          backgroundClip: 'text',
          animation: 'gradient-move 4s ease infinite',
        },
        '.slideup-text': {
          willChange: 'transform',
          transform: 'translateY(80px) translateZ(0)',
          backfaceVisibility: 'hidden' /* safari fix */,
          animation: 'slide-up 0.8s cubic-bezier(0.075, 0.82, 0.165, 1) forwards',
        },
        '.icon-link': {
          transition: 'color 0.2s',
          '@media (hover: hover) and (pointer: fine)': {
            '&:hover': {
              color: 'rgb(var(--color-secondary))',
            },
          },
        },
      });
    }),
  ],
};
