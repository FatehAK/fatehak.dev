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
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      bg: {
        body: 'rgb(var(--color-bg-body) / <alpha-value>)',
        gradient: 'rgb(var(--color-bg-gradient) / <alpha-value>)',
        code: 'rgb(var(--color-bg-code) / <alpha-value>)',
        selection: 'rgb(var(--color-bg-selection) / <alpha-value>)',
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
        bold: 'rgb(var(--color-text-bold) / <alpha-value>)',
        muted: 'rgb(var(--color-text-muted) / <alpha-value>)',
        code: 'rgb(var(--color-text-code) / <alpha-value>)',
        link: 'rgb(var(--color-secondary) / <alpha-value>)',
        selection: 'rgb(var(--color-text-selection) / <alpha-value>)',
      },
      border: {
        code: 'rgb(var(--color-border-code) / <alpha-value>)',
      },
    },
  },
};
