import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: "#FFAFCC",
        lightp: "#B8C0FF",
        background: "#fef8f8",
        shadowp: "#C8B6FF",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        banner: "url('/images/sponsors/banner.jpg')",
        newBanner: "url('/images/new-banner.jpg')", // Add your new banner here
      },
      boxShadow: {
        dropdown: "0 4px 15px 0 #C8B6FF;",
        navbar: "0 4px 15px 0 #C8B6FF",
        footer: "0 -4px 15px 0 #C8B6FF;",
        img: "0 4px 15px 0 #FFAFCC;",
      },
    },
  },
  plugins: [],
};

export default config;
