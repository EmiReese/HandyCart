module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        //White - overcast
        primary: "#F1F1F2",
        //Light blue
        secondary: "#A1D6E2",
        //Glacier Blue
        accent: "#1995AD",
        //Light - warm gray
        light: "#BCBABE",
        //Dark - Dark Gray
        dark: "#083C54",
        //Yellow - pale yellow
        note: "#fef08a",
      },
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
};
