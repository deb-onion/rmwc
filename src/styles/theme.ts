export const theme = {
  colors: {
    primary: {
      50: '#faf8f9',
      100: '#f0eef1',
      200: '#e1dde3',
      300: '#c9c3cc',
      400: '#a69daf',
      500: '#867990',
      600: '#6d6275',
      700: '#574e5d',
      800: '#433c47',
      900: '#2e2932',
    },
    accent: {
      light: '#f9e6e6',
      main: '#e6b3b3',
      dark: '#cc8080',
    },
    neutral: {
      white: '#ffffff',
      offWhite: '#faf9f8',
      lightGray: '#f4f2f1',
      gray: '#e6e4e3',
      darkGray: '#4a4644',
    },
  },
  typography: {
    heading: {
      fontFamily: 'var(--font-playfair)', // Playfair Display for headings
      weights: {
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
      },
    },
    body: {
      fontFamily: 'var(--font-inter)', // Inter for body text
      weights: {
        regular: 400,
        medium: 500,
      },
    },
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  transitions: {
    base: '0.3s ease-in-out',
    smooth: '0.6s cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: '0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
  animations: {
    fadeIn: 'fadeIn 0.6s ease-in-out',
    slideUp: 'slideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
    scaleIn: 'scaleIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
}; 