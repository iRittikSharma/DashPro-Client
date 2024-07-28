import type { Config } from "tailwindcss";

const config: Config = {
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
        "custom-gradient": "linear-gradient(180deg, #FFFFFF 0%, #AFA3FF 100%)",
        "card-color": "linear-gradient(180deg, #F7F7F7 0%, #F0F0F0 100%)",
      },
      backgroundColor: {
        inputColor: "#EBEBEB",
      },
      borderColor: {
        customBorder: "#CECECE",
      },
      textColor: {
        customHighlight: "#4534AC",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
export default config;
