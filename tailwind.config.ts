import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screen: {
        'xs': '512px'
      },
      colors: {
        primary: '#0ab7db',
        secondary: "#f66",
        // dark: "#171717",
        // dark: "#214888",
        darker: "#122b54",
        dark: "#0d487e",
        sitetext: "#333333",
        success: "#09dba0",
        danger: "#f34f7c",
        default: "#323f89"
      },
      fontFamily: {
        DMSans: 'var(--DMSans)',
        nunito: 'var(--nunito)',
      },
    },

  },
  plugins: [],
};
export default config;
