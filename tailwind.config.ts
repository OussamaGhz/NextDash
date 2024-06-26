import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        bg: "#151c2c",
        bgSoft: "#182237",
        text: "#fff",
        textSoft: "#b7bac1",
      },
    },
    flex: {
      "1": "1 1 0%",
      "2": "2 2 0%",
      "3": "3 3 0%",
      "4": "4 4 0%",
    },
    screens: {
      sm: "640px",
      md: "1300px",
    },
  },
  plugins: [],
};
export default config;
