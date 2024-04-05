/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        LightSky: "#CCD7F7ff",
        DarkBlue: "#0A1930ff",
        DarkGray: "#8891B0ff",
        Navy: '#0a192f',
        LightNavy: '#112240',
        LightestNavy: '#233554',
        Slate: '#8892b0',
        LightSlate: '#a8b2d1',
        LightestSlate: '#ccd6f6',
        White: '#e6f1ff',
        Green: '#64ffda',
      },
      backgroundImage: theme => ({
        'gradient-radial': 'radial-gradient(circle, rgba(8,37,140,1) 0%, rgba(2,0,36,0) 74%)',
      }),
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
}