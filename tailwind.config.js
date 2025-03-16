/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      backgroundImage: {
        'loginpage-bg': "url('/Images/BG.jpg')",
        'signuppage-bg': "url('/Images/SignupPage.jpg')",
        '600X400': "url('/Images/600X400.jpg')"
      },
      fontSize: {
        xxs: "7px",
        small: '11px',
        verySmall: '12px',
        "xsmall": "13px",
        extraSmall: '0.9rem',
        xs: '14px',
        sm: '0.8rem',
        smbase: "15px",
        base: '1rem',
        xl: '1.25rem',
        xl2xl: '22px',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
      height: {

        customHeight: '350px',
        customHeight1: '171px'
      },
      width: {

        customeWidth: '210px',
        customeWidth1: '270px'
      },
      boxShadow: {
        '3xl': '0px 5px 15px rgba(0, 0, 0, 0.35)',
      }
    }
  },
  plugins: [require("tailwind-scrollbar")],
}



