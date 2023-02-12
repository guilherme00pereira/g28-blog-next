// @ts-check
const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

// ../node_modules/pliny/dist/**/*.mjs is needed for monorepo setup
/** @type {import("tailwindcss/types").Config } */
module.exports = {
  content: [
    '../node_modules/pliny/**/*.{js,ts,tsx}',
    './node_modules/pliny/**/*.{js,ts,tsx}',
    './pages/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './layouts/**/*.{js,ts,tsx}',
    './lib/**/*.{js,ts,tsx}',
    './data/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        '9/16': '56.25%',
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['Outfit', ...fontFamily.sans],
      },
      colors: {
        primary: colors.cyan,
        secondary: colors.sky,
        slate: colors.slate,
        'wrapper-dark': '#131C31',
        whatsapp: '#25D366',
        mail: '#EA4335',
      },
      boxShadow: {
        neon: '0 3px 20px rgb(11,209,209,0.2)',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.slate.700'),
            a: {
              color: theme('colors.secondary.700'),
              textDecoration: 'none',
              '&:hover': {
                color: `${theme('colors.secondary.800')} !important`,
                textDecoration: 'underline',
              },
              code: { color: theme('colors.secondary.800') },
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.slate.900'),
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.slate.900'),
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.slate.900'),
            },
            'h4,h5,h6': {
              color: theme('colors.slate.900'),
            },
            pre: {
              backgroundColor: theme('colors.slate.800'),
            },
            code: {
              color: theme('colors.pink.500'),
              backgroundColor: theme('colors.slate.100'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            details: {
              backgroundColor: theme('colors.slate.100'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            hr: { borderColor: theme('colors.slate.200') },
            'ol li::marker': {
              fontWeight: '600',
              color: theme('colors.slate.500'),
            },
            'ul li::marker': {
              backgroundColor: theme('colors.slate.500'),
            },
            strong: { color: theme('colors.slate.600') },
            blockquote: {
              color: theme('colors.slate.900'),
              borderLeftColor: theme('colors.slate.200'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.slate.300'),
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.400')} !important`,
              },
              code: { color: theme('colors.primary.400') },
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.slate.100'),
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.slate.100'),
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.slate.100'),
            },
            'h4,h5,h6': {
              color: theme('colors.slate.100'),
            },
            pre: {
              backgroundColor: theme('colors.slate.800'),
            },
            code: {
              backgroundColor: theme('colors.slate.800'),
            },
            details: {
              backgroundColor: theme('colors.slate.800'),
            },
            hr: { borderColor: theme('colors.slate.700') },
            'ol li::marker': {
              fontWeight: '600',
              color: theme('colors.slate.400'),
            },
            'ul li::marker': {
              backgroundColor: theme('colors.slate.400'),
            },
            strong: { color: theme('colors.slate.100') },
            thead: {
              th: {
                color: theme('colors.slate.100'),
              },
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.slate.700'),
              },
            },
            blockquote: {
              color: theme('colors.slate.100'),
              borderLeftColor: theme('colors.slate.700'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
