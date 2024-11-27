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
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      // "2xl": "1400px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        contrast1: "#3c3c3c",
        contrast2: "#444",
        border_gray: "#BEBDBD]",
        red1: "#EC2D2D",
        red2: "#D84315",
        golden1: "#faa61a",
        teal1: "#006563",
      },
      backgroundImage: {
        "story-gradient":
          "linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6))",
        "custom-dashed":
          "repeating-linear-gradient(to right, white, white 30px, transparent 10px, transparent 45px)",
      },
      container: {
        center: true,
        padding: "16px",
      },
      boxShadow: {
        header: "rgba(0, 0, 0, 0.1) 0px 2px 4px",
        shareShadow: "0px 9px 20px rgba(13, 38, 76, 0.19)",
        headerShadow: "0px 0.333rem 0.333rem 0 #00000040",
        anchorAdShadow: "0.333rem -6px 0.333rem #00000014",
      },
      animation: {
        spin: "rotation 1s linear infinite",
      },
      keyframes: {
        rotation: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },

  plugins: [],
};
