/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        White : 'hsl (0, 0%, 100%)', //(PricingComponentBackground)
        VeryPaleBlue : 'hsl(230, 100%, 99%)', //(Main Background)
        LightGrayishBlue : 'hsl(224, 65%, 95%)', //(Empty Slider Bar)
        LightGrayishBlue : 'hsl(223, 50%, 87%)' ,//(Toggle Background)
        GrayishBlue : 'hsl(225, 20%, 60%)', //(Text)
        DarkDesaturatedBlue : 'hsl(227, 35%, 25%)', //(Text & CTA Background)
      },
    },
  },
  plugins: [],
};
