export const theme = {
  colors: {
    primary: '#0f172a',
    darkText: '#1e293b',
    secundary: '',
    white: '#e2e8f0',
  },
  font: {
    family: {
      default: "'Open Sans', sans-serif",
    },
    sizes: {
      text_xs: `font-size: 0.75rem;
line-height: 1rem;`,
      text_sm: `font-size: 0.875rem;
line-height: 1.25rem;`,
      text_base: `font-size: 1rem;
line-height: 1.5rem;`,
      text_lg: `font-size: 1.125rem;
line-height: 1.75rem;`,
      text_xl: `font-size: 1.25rem;
line-height: 1.75rem;`,
      text_2xl: `font-size: 1.5rem;
line-height: 2rem;`,
      text_3xl: `font-size: 1.875rem;
line-height: 2.25rem;`,
      text_4xl: `font-size: 2.25rem;
line-height: 2.5rem;`,
      text_5xl: `font-size: 3rem;
line-height: 1;`,
    },
  },
  media: {
    lteMedium: '(max-width: 768px)',
  },
  spacings: {
    xsmall: '8rem',
    small: '1.6rem',
    medium: '2.4rem',
    large: '3.2rem',
    xlarge: '4.0rem',
    xxlarge: '4.8rem',
    huge: '5.6rem',
    xhuge: '6.4rem',
  },
} as const;
