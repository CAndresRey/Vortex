/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#005f8f",
        secondary: "#000f1f",
        tertiary: "#265973",
        light: "#ccffff",
        accent: "#26a3d9",
        dark: "#001f3d",
        "dark-accent": "#0F2D41",
      },
      fontSize: {
        h1: ["56px", "66px"],
        h2: ["48px", "58px"],
        h3: ["40px", "50px"],
        h4: ["32px", "40px"],
        h5: ["24px", "32px"],
        h6: ["20px", "26px"],
        "body-m": ["16px", "22px"],
        "body-s": ["14px", "20px"],
        "detail-s": ["12px", "18px"],
        "detail-xs": ["10px", "16px"],
      },
      fontFamily: {
        regular: ["Bricolage Grotesque", "DM Sans"],
        medium: ["Bricolage Grotesque", "DM Sans"],
        bold: ["Bricolage Grotesque", "DM Sans"],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        bold: 700,
      },
    },
  },
  plugins: [],
};

