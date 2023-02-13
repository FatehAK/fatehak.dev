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
        'code-highlight': 'rgb(var(--color-bg-code-highlight) / <alpha-value>)',
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
        muted: 'rgb(var(--color-text-body) / 56%)',
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
        '.card-list': {
          display: 'grid',
          gap: '1.5rem',
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          [mdQuery]: {
            gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
          },
        },
        '.card': {
          display: 'flex',
          opacity: '0',
          animation: 'fadein 0.8s ease forwards',
          '& > .card-inner': {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            padding: '1.6rem',
            background: `${theme('backgroundImage.bg-gradient')}`,
            borderRadius: '0.5rem',
            '&::after': {
              content: '""',
              position: 'absolute',
              zIndex: '-100',
              top: '0',
              right: '0',
              bottom: '0',
              left: '0',
              transform: 'translate3d(0, 0, 0)', // safari fix
              backfaceVisibility: 'hidden', // safari fix
              backgroundImage:
                'linear-gradient(235deg, rgb(var(--color-secondary)), rgb(var(--color-bg-body)), rgb(var(--color-primary)))',
              filter: 'blur(6px)',
              transition: 'all 0.3s',
            },
            '@media (hover: hover) and (pointer: fine)': {
              '&:hover::after': {
                top: '-4px',
                right: '-4px',
                bottom: '-4px',
                left: '-4px',
                filter: 'blur(9px)',
              },
            },
          },
        },
      });
    }),
  ],
};
