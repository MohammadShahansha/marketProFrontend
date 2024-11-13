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
        bgPrimaryColor: "var(--bg-primary-color)",
        bgHoverColor: "var(--bg-hover-color)",
        textPrimaryColor: "var(--text-primary-color)",
        textSecondaryColor: "var(--text-secondary-color)",
        borderPrimaryColor: "var(--border-primary-color)",
      },
      fontFamily: {
        quickSans: ["Quicksand", "sans-serif"],
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("daisyui")],
} satisfies Config;
