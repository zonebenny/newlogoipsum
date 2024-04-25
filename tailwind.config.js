/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    fontFamily: {
      workSans: "var(--ff-work-sans)",
      cormorantFont: "var(--ff-cormorant-garamond)",
    },
    container: {
      center: true,
      padding: "12px",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1388px",
      },
    },
    extend: {
      colors: {
        "custom-white": "var(--custom-white)",
        "custom-black": "var(--custom-black)",
        "custom-counter-color": "var(--custom-counter-color)",
        "custom-beige-color": "var(--custom-beige-color)",
        "custom-wheat-color": "var(--custom-wheat-color)",
        "custom-darkgrey-color": "var(--custom-darkgrey-color)",
        "custom-footer-bgcolor": "var(custom-footer-bgcolor)",
        "custom-counter-textcolor": "var(--custom-counter-text)",
        "custom-line-bgcolor": "var(--custom-line-bgcolor)",
        "custom-black-transperant": "var(--custom-black-transperant)",
        "custom-hover-lightorange":"var(--custom-hover-lightorange)"
      },
      backgroundImage: {
        "custom-gradient" : "var(--custom-gradient)",
        "custom-hover-transperant":"var(--custom-hover-transperant)",
        "custom-card-hover-transperant":"var(--custom-card-hover-transperant)"
      },
    },
    
  },
  plugins: [],
};
