import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        mauve: "#cba6f7",
        mantle: "#181825",
        surfaceZero: "#313244",
        crust: "#11111b"
      },
    },
  },
  plugins: [],
} satisfies Config;
